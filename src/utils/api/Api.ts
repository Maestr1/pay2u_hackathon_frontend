import axios from 'axios';
import { RootState, store } from '../../services/store';
import { Store } from '@reduxjs/toolkit/react';

class Api {
  private apiToken: string;
  private store: Store<RootState>;
  baseUrl: string;

  constructor(store: Store<RootState>, baseUrl: string) {
    this.store = store;
    // this.store.subscribe(this.handleStoreChange);
    this.apiToken = localStorage.getItem('apiToken') || '';
    this.baseUrl = baseUrl;
  }

  handleStoreChange = () => {
    // this.apiToken = this.store.getState().currentUserReducer.apiToken;
  };

  private requester() {
    return axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: `Token ${this.apiToken}`,
      },
    });
  }

  login = (username: string, password: string) =>
    this.requester()
      .post(
        '/auth/token/login/',
        { username, password },
        { headers: { Authorization: '' } }
      )
      .then(({ data }) => data);

  getUserData = () =>
    this.requester()
      .get('/v1/users/me')
      .then(({ data }) => data);

  getUserSubscriptions = () =>
    this.requester()
      .get('/v1/subscriptions')
      .then(({ data }) => data);

  getAllServicesList = () =>
    this.requester()
      .get('/v1/services')
      .then(({ data }) => data);

  getService = (id: number) =>
    this.requester()
      .get(`/v1/services/${id}`)
      .then(({ data }) => data);

  getCategoriesList = () =>
    this.requester()
      .get(`/v1/categories`)
      .then(({ data }) => data);

  searchSubscriptionsByQuery = (query: string = '') =>
    this.requester()
      .get(`/v1/subscriptions/search/${query}`)
      .then(({ data }) => data);
}

const api = new Api(store, 'http://localhost:8000/api/');

export default api;
