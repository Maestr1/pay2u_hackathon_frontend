import { ReactElement } from 'react';
import './PurchasePage.scss';
import { useLocation } from 'react-router-dom';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader.tsx';
import { ITariff } from '../../utils/interfaces/interfaces.ts';
// import { useBeforeunload } from 'react-beforeunload';
// import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { SwitchLovely } from '../../components/uxComponents/switch.ts';
import { useSelector } from '../../hooks/store.ts';

function PurchasePage(): ReactElement {
  const currentUser = useSelector(
    (store) => store.currentUserReducer.currentUser
  );
  const subscription = useLocation().state.subscription;
  const tariff: ITariff = useLocation().state.selectTariff;
  // const { register, handleSubmit } = useForm<IShippingFields>();


  function calculateDeclension() {
    if (tariff.tariffDuration > 1 && tariff.tariffDuration < 5) {
      return 'месяца';
    }
    if (tariff.tariffDuration > 4) {
      return 'месяцев';
    }
    return 'месяц';
  }

  // const onSubmit: SubmitHandler<IShippingFields> = (data) => {
  //   console.log(data);
  // };

  return (
    <section className="purchase-page">
      <ServiceHeader selectSubscription={subscription} />
      <div className="purchase-page__tariff-title-wrap">
        <h2>{tariff.tariffName}</h2>
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
      <form className="purchase-page__form">
        {/* <input
          {...(register('telNumber'),
          { required: true, placeholder: '+7 999 999 99 99' })}
          type="tel"
        /> */}
        <div className="purchase-page__phone-input">
          <TextField
            sx={{
              '& legend': { display: 'none' },
              '& label': { transform: 'translate(0, -26px) scale(0.75)' },
              '.MuiOutlinedInput-notchedOutline': { top: '0' },
            }}
            fullWidth
            label="Телефон для оформления подписки"
            required
            type="tel"
            placeholder="999 999 99 99"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+7</InputAdornment>
              ),
            }}
          />
        </div>
        <p>Способ оплаты</p>
        <RadioGroup name="payment-method">
          {currentUser?.paymentMethods.map((method, index) => (
            <FormControlLabel
              checked={method.priorityMethod}
              sx={{
                justifyContent: 'space-between',
                margin: '0',
                '& img': { height: '39px' },
                '& .MuiTypography-root': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                },
              }}
              labelPlacement="start"
              key={`payment-method-${index}`}
              value={method.id}
              control={<Radio />}
              label={
                <>
                  <img src={method.methodIcon} alt={method.methodName} />
                  <p>{method.methodName}</p>
                </>
              }
            />
          ))}
        </RadioGroup>

        <FormControlLabel
          checked
          value="start"
          control={<SwitchLovely color="primary" />}
          label="Подключить автоплатеж"
          labelPlacement="start"
          sx={{ gap: '12px', flexDirection: 'row', margin: '0' }}
        />
        <Button variant="contained">Оплатить</Button>
      </form>
    </section>
  );
}

export default PurchasePage;
