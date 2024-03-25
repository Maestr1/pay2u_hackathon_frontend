import { ReactElement } from 'react';
import './PurchasePage.scss';
import { useLocation } from 'react-router-dom';
import ServiceHeader from '../../ServiceHeader/ServiceHeader';

function PurchasePage(): ReactElement {
  const subscription = useLocation().state.subscription;
  const tariff = useLocation().state.selectTariff;

  return (
    <section className="purchase-page">
      <ServiceHeader selectSubscription={subscription} />
      <div className='purchase-page__tariff-title-wrap'>
        <h2>{tariff.tariffName}</h2>
        <p>выгодно</p>
      </div>
      <p></p>
    </section>
  );
}

export default PurchasePage;
