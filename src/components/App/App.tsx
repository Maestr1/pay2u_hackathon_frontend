import './App.scss';
import MainPage from '../pages/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.tsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.tsx';
import { ReactElement, useEffect } from 'react';
import { mainData } from '../../utils/fakeData.ts';
import AvailableServicesPage from '../pages/AvailableServicesPage/AvailableServicesPage.tsx';
import ServicePage from '../pages/ServicePage/ServicePage.tsx';
import PurchasePage from '../pages/PurchasePage/PurchasePage.tsx';
import SuccessfulPurchasePage from '../pages/SuccessfulPurchasePage/SuccessfulPurchasePage.tsx';
import { useDispatch } from '../../hooks/store.ts';
import { addAvailableSubscriptions } from '../../services/availableSubscriptionsSlice.ts';

function App(): ReactElement {


  // const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions)
  const dispatch = useDispatch();

  useEffect(() => {
    //Делаем фиктивный запрос на бэк и помещаем данные в стор
    dispatch(addAvailableSubscriptions(mainData.availableSubscriptions));
  }, []);


  return (
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index element={ <MainPage/> }/>
        <Route path="/available-services" element={ <AvailableServicesPage/> }/>
        <Route path="/services/:id" element={ <ServicePage/> }/>
        <Route path="/purchase" element={ <PurchasePage/> }/>
        <Route path="/successful-purchase" element={ <SuccessfulPurchasePage/> }/>
      </Route>
      <Route path="*" element={ <ErrorPage/> }/>
    </Routes>
  );
}

export default App;
