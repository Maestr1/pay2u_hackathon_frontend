import './App.scss';
import MainPage from '../pages/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.tsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.tsx';
import { ReactElement, useEffect } from 'react';
import { subscriptionsCategoriesData, subscriptionsData } from '../../utils/fakeData.ts';
import CategoryCatalogPage from '../pages/CategoryCatalogPage/CategoryCatalogPage.tsx';
import ServicePage from '../pages/ServicePage/ServicePage.tsx';
import PurchasePage from '../pages/PurchasePage/PurchasePage.tsx';
import SuccessfulPurchasePage from '../pages/SuccessfulPurchasePage/SuccessfulPurchasePage.tsx';
import { useDispatch } from '../../hooks/store.ts';
import { addAvailableSubscriptions } from '../../services/availableSubscriptionsSlice.ts';
import CategorizedServicesPage from '../pages/СategorizedServicesPage/СategorizedServicesPage.tsx';
import UserServicesPage from '../pages/UserServicesPage/UserServicesPage.tsx';
import { addSubscriptionsCategories } from '../../services/subscriptionsCategoriesSlice.ts';

function App(): ReactElement {

  const dispatch = useDispatch();

  useEffect(() => {
    //Делаем фиктивный запрос на бэк и помещаем данные в стор
    dispatch(addAvailableSubscriptions(subscriptionsData.availableSubscriptions));
    dispatch(addSubscriptionsCategories(subscriptionsCategoriesData))
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index element={ <MainPage/> }/>
        <Route path="/services/all" element={ <CategoryCatalogPage/> }/>
        <Route path="/services/my-services" element={ <UserServicesPage/> }/>
        <Route path="/services/category/popular" element={ <CategorizedServicesPage/> }/>
        <Route path="/services/category/:category" element={ <CategorizedServicesPage/> }/>
        <Route path="/services/:id" element={ <ServicePage/> }/>
        <Route path="/purchase" element={ <PurchasePage/> }/>
        <Route path="/successful-purchase" element={ <SuccessfulPurchasePage/> }/>
      </Route>
      <Route path="*" element={ <ErrorPage/> }/>
    </Routes>
  );
}

export default App;
