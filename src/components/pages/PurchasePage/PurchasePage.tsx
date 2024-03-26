import { ReactElement } from 'react';
import './PurchasePage.scss';
import { useLocation } from 'react-router-dom';
import ServiceHeader from '../../ServiceHeader/ServiceHeader';
import { IShippingFields, ITariff } from '../../../utils/interfaces/interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

function PurchasePage(): ReactElement {
  const subscription = useLocation().state.subscription;
  const tariff: ITariff = useLocation().state.selectTariff;
  const { register, handleSubmit } = useForm<IShippingFields>();

  function calculateDeclension() {
    if (tariff.tariffDuration > 1 && tariff.tariffDuration < 5) {
      return 'месяца';
    }
    if (tariff.tariffDuration > 4) {
      return 'месяцев';
    }
    return 'месяц';
  }

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    console.log(data);
  };

  return (
    <section className="purchase-page">
      <ServiceHeader selectSubscription={subscription} />
      <div className="purchase-page__tariff-title-wrap">
        <h2>{tariff.tariffName}</h2>
        <p>выгодно</p>
      </div>
      <p className="">
        {tariff.tariffPromoPrice / tariff.tariffDuration} ₽ за месяц
      </p>
      {tariff.tariffDuration > 1 && (
        <p>
          всего за {tariff.tariffDuration} {calculateDeclension()}{' '}
          {tariff.tariffPromoPrice} ₽
        </p>
      )}
      <p className="purchase-page__total">
        <span>Итого:</span>
        <span>{tariff.tariffPromoPrice} ₽</span>
      </p>
      <form className="purchase-page__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...(register('telNumber'),
          { required: true, placeholder: '+7 999 999 99 99' })}
          type="tel"
        />
        <TextField helperText="Телефон, на который оформить подписку" />
        <input type="radio" name="purchaseMethod" checked />
        <input type="radio" name="purchaseMethod" />
        <Button
          // to={'/purchase'}
          // state={{ subscription: selectSubscription, selectTariff: selectedTariff }}
          // component={Link}
          variant="contained"
        >
          Подключить
        </Button>
      </form>
    </section>
  );
}

export default PurchasePage;
