import { ReactElement } from 'react';
import './PurchasePage.scss';
import { useLocation } from 'react-router-dom';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader.tsx';
import {
  IPaymentMethod,
  IShippingFields,
  ITariff,
} from '../../utils/interfaces/interfaces.ts';
// import { useBeforeunload } from 'react-beforeunload';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import {
  Button,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  styled,
} from '@mui/material';
import { SwitchLovely } from '../../components/uxComponents/switch.ts';
import { useSelectorTyped } from '../../hooks/store.ts';

const PhoneNubmerInput = styled(TextField)(() => ({
  '& legend': { display: 'none' },
  '& label': { transform: 'translate(0, -26px) scale(0.75)' },
  '& fieldset': {
    transition: 'border-color 200ms cubic-bezier(0.0, 0, 0.2, 1)',
  },
  '.MuiOutlinedInput-notchedOutline': { top: '0' },
}));

const RadioButton = styled(FormControlLabel)(() => ({
  justifyContent: 'space-between',
  margin: '0',
  '& img': { height: '39px' },
  '& .MuiTypography-root': {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
}));

const AutopaymentSwitch = styled(FormControlLabel)(() => ({
  gap: '12px',
  flexDirection: 'row',
  margin: '0',
}));

function PurchasePage(): ReactElement {
  const currentUser = useSelectorTyped(
    (store) => store.currentUserReducer.currentUser
  );
  const subscription = useLocation().state.subscription;
  const tariff: ITariff = useLocation().state.selectTariff;
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IShippingFields>({
    defaultValues: {
      phoneNumber: currentUser?.phone.slice(2) || '',
      userId: currentUser.userId,
      subscriptionId: subscription.id,
      autopayment: true,
      paymentMethodId: currentUser.paymentMethods.find(
        (item: IPaymentMethod) => item.priorityMethod
      )?.id,
    },
    mode: 'onTouched',
  });

  function calculateDeclension() {
    if (tariff.services_duration > 1 && tariff.services_duration < 5) {
      return 'месяца';
    }
    if (tariff.services_duration > 4) {
      return 'месяцев';
    }
    return 'месяц';
  }

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    console.log(currentUser);
    console.log(data);
    console.log(errors);
    // reset()
  };

  return (
    <section className="purchase-page">
      <ServiceHeader selectSubscription={subscription} />
      <div className="purchase-page__tariff-title-wrap">
        <h2>{tariff.name}</h2>
      </div>
      <p className="">
        {tariff.tariff_full_price / tariff.services_duration} ₽ за один месяц
      </p>

      <p className="purchase-page__total">
        <span>Итого:</span>
        <span>{tariff.tariff_full_price} ₽</span>
      </p>

      {/* FORM */}
      <form className="purchase-page__form" onSubmit={handleSubmit(onSubmit)}>
        <p>Способ оплаты</p>
        <Controller
          control={control}
          name="paymentMethodId"
          render={({ field }) => (
            <RadioGroup name="paymentMethodId" value={field.value}>
              {currentUser?.paymentMethods.map((method, index) => (
                <RadioButton
                  label={
                    <>
                      <img src={method.methodIcon} alt={method.methodName} />
                      <p>{method.methodName}</p>
                    </>
                  }
                  labelPlacement="start"
                  key={`payment-method-${index}`}
                  control={<Radio />}
                  onChange={(e) => field.onChange(e)}
                  value={method.id}
                />
              ))}
            </RadioGroup>
          )}
        />
        <Controller
          control={control}
          name="autopayment"
          render={({ field }) => (
            <AutopaymentSwitch
              checked={field.value}
              control={<SwitchLovely color="primary" />}
              label="Подключить автоплатеж"
              labelPlacement="start"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Button type="submit" variant="contained">
          Оплатить
        </Button>
      </form>
    </section>
  );
}

export default PurchasePage;
