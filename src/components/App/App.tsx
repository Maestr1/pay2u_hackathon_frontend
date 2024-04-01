import './App.scss';
import MainPage from '../../pages/MainPage/MainPage.tsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout.tsx';
import ErrorPage from '../../pages/ErrorPage/ErrorPage.tsx';
import { ReactElement, useEffect, useState } from 'react';
import CategoryCatalogPage from '../../pages/CategoryCatalogPage/CategoryCatalogPage.tsx';
import ServicePage from '../../pages/ServicePage/ServicePage.tsx';
import PurchasePage from '../../pages/PurchasePage/PurchasePage.tsx';
import SuccessfulPurchasePage from '../../pages/SuccessfulPurchasePage/SuccessfulPurchasePage.tsx';
import { useDispatch, useSelector } from '../../hooks/store.ts';
import {
  addAvailableSubscriptions,
  addUserSubscriptions,
} from '../../services/subscriptionsSlice.ts';
import CategoryPage from '../../pages/CategoryPage/CategoryPage.tsx';
import UserServicesPage from '../../pages/UserServicesPage/UserServicesPage.tsx';
import { addSubscriptionsCategories } from '../../services/subscriptionsCategoriesSlice.ts';
import {
  addCurrentUser,
  addApiToken,
} from '../../services/currentUserSlice.ts';
import OnboardingPage from '../../pages/OnboardingPage/OnboardingPage.tsx';
import GuidePage from '../../pages/GuidePage/GuidePage.tsx';
import api from '../../utils/api/Api.ts';
import Loader from '../../pages/Loader/Loader.tsx';
import { setIsLoadingState } from '../../services/pageStatesSlice.ts';

function App(): ReactElement {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const apiToken = useSelector((state) => state.currentUserReducer.apiToken);
  const isLoading = useSelector((state) => state.pageStatesReducer.isLoading);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    Promise.all([
      api.getUserData(),
      api.getAllServicesList(),
      api.getUserSubscriptions(),
      api.getCategoriesList(),
    ])
      .then((res) => {
        dispatch(addCurrentUser(res[0]));
        dispatch(addAvailableSubscriptions(res[1]));
        dispatch(addUserSubscriptions(res[2]));
        dispatch(addSubscriptionsCategories(res[3]));
      })
      .then(() => dispatch(setIsLoadingState(false)))
      .catch((err) => console.log(err));
  }, [loggedIn]);

  useEffect(() => {
    const isVisited = localStorage.getItem('isVisited');
    if (!isVisited) {
      navigate('/onboarding');
      localStorage.setItem('isVisited', 'true');
    }
  }, []);

  function login() {
    if (!localStorage.getItem('apiToken')) {
      api
        .login('pavlen', '1')
        .then((res) => {
          localStorage.setItem('apiToken', res.auth_token);
        })
        .then(() => setLoggedIn(true));
    }
  }

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/services/all" element={<CategoryCatalogPage />} />
          <Route path="/services/my-services" element={<UserServicesPage />} />
          <Route path="/services/category/popular" element={<CategoryPage />} />
          <Route
            path="/services/category/:category"
            element={<CategoryPage />}
          />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route
            path="/successful-purchase"
            element={<SuccessfulPurchasePage />}
          />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/guide" element={<GuidePage />} />
          // TODO не забыть удалить
          <Route path="/loader" element={<Loader />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
}

export default App;
