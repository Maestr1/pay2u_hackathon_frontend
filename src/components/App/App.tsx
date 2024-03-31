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
import { addAvailableSubscriptions } from '../../services/availableSubscriptionsSlice.ts';
import CategoryPage from '../../pages/CategoryPage/CategoryPage.tsx';
import UserServicesPage from '../../pages/UserServicesPage/UserServicesPage.tsx';
import { addSubscriptionsCategories } from '../../services/subscriptionsCategoriesSlice.ts';
import {
  addCurrentUser,
  addApiToken,
} from '../../services/currentUserSlice.ts';
import OnboardingPage from '../../pages/OnboardingPage/OnboardingPage.tsx';
import GuidePage from '../../pages/GuidePage/GuidePage.tsx';
import {
  getApiToken,
  getUserData,
  getAllServicesList,
  getCategoriesList,
} from '../../utils/Api.ts';
import Loader from '../../pages/Loader/Loader.tsx';

function App(): ReactElement {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiToken = useSelector((state) => state.currentUserReducer.apiToken);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getApiToken().then((res) => {
      dispatch(addApiToken(res));
    });
  }, []);

  useEffect(() => {
    if (apiToken) {
      Promise.all([getUserData(), getAllServicesList(), getCategoriesList()])
        .then((res) => {
          dispatch(addCurrentUser(res[0]));
          dispatch(addAvailableSubscriptions(res[1]));
          dispatch(addSubscriptionsCategories(res[2]));
        })
        .then(() => setIsLoading(false))
        .catch((err) => console.log(err));
    }
  }, [apiToken]);

  useEffect(() => {
    const isVisited = localStorage.getItem('isVisited');
    if (!isVisited) {
      navigate('/onboarding');
      localStorage.setItem('isVisited', 'true');
    }
  }, []);

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
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
}

export default App;
