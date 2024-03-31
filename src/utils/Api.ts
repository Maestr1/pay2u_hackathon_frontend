import axios from 'axios';
import { useSelector } from '../hooks/store';

export default function Api() {
  const options = {
    baseUrl: 'http://localhost:8000/api',
  };
  
  const apiToken = useSelector((store) => store.currentUserReducer.apiToken);
  
  const requester = axios.create({
    baseURL: options.baseUrl,
    headers: {
      Authorization: `Token ${apiToken}`,
    },
  });
  
   const getApiToken = () =>
    requester
      .post('/auth/token/login/', { password: '1', username: 'pavlen' })
      .then(({ data }) => data);
  
   const getUserData = () =>
    requester.get('/v1/users/me').then(({ data }) => data);
  
   const getAllServicesList = () =>
    requester.get('/v1/services').then(({ data }) => data);
  
   const getService = (id: number) =>
    requester.get(`/v1/services/${id}`).then(({ data }) => data);
  
   const getCategoriesList = () =>
    requester.get(`/v1/categories`).then(({ data }) => data);
  
   const searchSubscriptionsByQuery = (query: string = '') =>
    requester.get(`/v1/subscriptions/search/${query}`).then(({ data }) => data);
  
}

