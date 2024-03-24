import axios, { AxiosInstance } from 'axios';
import { subscriptionsData } from './fakeData.ts';

interface IOptions {
  baseUrl: string,
  config: {
    withCredentials: boolean
  }
}

class Api {
  private _options: IOptions;
  private _requester: AxiosInstance;
  private _testApi: boolean;

  constructor() {
    this._testApi = true;
    this._options = {
      baseUrl: 'http://localhost:3000',
      config: {
        withCredentials: true,
      }
    };
    this._requester = axios.create({
      withCredentials: this._options.config.withCredentials,
      baseURL: this._options.baseUrl
    });
  }

  searchSubscriptions(query: string = '') {
    if (this._testApi) {
      return Promise.resolve({ content: subscriptionsData });
    } else {
      return this._requester.get(`/subscriptions/search/${query}`)
        .then((res) => res.data)
        .catch((err) => `Ошибка запроса. Код ошибки: ${ err.response.status }`);
    }
  }
}


const api = new Api();
export default api;
