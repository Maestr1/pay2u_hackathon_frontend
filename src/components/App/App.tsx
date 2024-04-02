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
import { useDispatchTyped } from '../../hooks/store.ts';
import { addCategorizedServices } from '../../services/servicesSlice.ts';
import CategoryPage from '../../pages/CategoryPage/CategoryPage.tsx';
import UserServicesPage from '../../pages/UserServicesPage/UserServicesPage.tsx';
import { addServicesCategories } from '../../services/servicesCategoriesSlice.ts';
import {
  addCurrentUser,
  addUserSubscriptions,
} from '../../services/currentUserSlice.ts';
import OnboardingPage from '../../pages/OnboardingPage/OnboardingPage.tsx';
import GuidePage from '../../pages/GuidePage/GuidePage.tsx';
import api from '../../utils/api/Api.ts';
import Loader from '../../pages/Loader/Loader.tsx';
import { setIsLoadingState } from '../../services/pageStatesSlice.ts';
import { ICategory, IService } from '../../utils/interfaces/interfaces.ts';

function App(): ReactElement {
  const dispatch = useDispatchTyped();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    dispatch(setIsLoadingState(true));
    Promise.all([
      api.getUserData(),
      api.getUserSubscriptions(),
      api.getCategoriesList(),
    ])
      .then((res) => {
        dispatch(addCurrentUser(res[0]));
        dispatch(addUserSubscriptions(res[1]));
        dispatch(addServicesCategories(res[2]));
        getAllServicesList(res[2]);
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setIsLoadingState(false)));
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

  function getAllServicesList(categories: ICategory[]) {
    Promise.all(categories.map(({ id }) => api.getCategorizedServicesList(id)))
      .then((servicesList) =>
        dispatch(
          addCategorizedServices(
            servicesList.map((services, index) => ({
              category: categories[index],
              services,
            }))
          )
        )
      )
      .catch(console.error);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/services/all" element={<CategoryCatalogPage />} />
        <Route path="/services/my-services" element={<UserServicesPage />} />
        <Route path="/services/category/popular" element={<CategoryPage />} />
        <Route path="/services/category/:category" element={<CategoryPage />} />
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

export default App;
