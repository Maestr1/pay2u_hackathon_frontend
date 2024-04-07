import React, { ReactElement, useEffect, useState } from 'react';
import './ServicePage.scss';
import { Link, useParams } from 'react-router-dom';
import {
  IServiceExtended,
  ISubscription,
  ITariff,
} from '../../utils/interfaces/interfaces.ts';
import { Button, Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader.tsx';
import api from '../../utils/api/Api.ts';
import { setIsLoadingState } from '../../services/pageStatesSlice.ts';
import { useDispatchTyped, useSelectorTyped } from '../../hooks/store.ts';
import Loader from '../Loader/Loader.tsx';
import styled from 'styled-components';

const AutopaymentButton = styled(Button)<{ $active: boolean }>`
  && {
    border: 1px solid;
    border-color: ${({ $active }) =>
      !$active ? 'var(--green)' : 'var(--red)'};
    color: ${({ $active }) => (!$active ? 'var(--green)' : 'var(--red)')};
    :active & {
      background-color: transparent;
    }
  }
`;

function ServicePage(): ReactElement {
  const { id } = useParams();
  const dispatch = useDispatchTyped();
  const isLoading = useSelectorTyped(
    (state) => state.pageStatesReducer.isLoading
  );
  const userSubscriptions = useSelectorTyped(
    (store) => store.currentUserReducer.userSubscriptions
  );
  const [selectService, setSelectService] = useState({} as IServiceExtended);
  const [userSubscription, setUserSubscription] = useState({} as ISubscription);
  const [tabValue, setTabValue] = useState('0');
  const [selectedTariff, setSelectedTariff] = useState({} as ITariff);
  const [alreadySubscribe, setAlreadySubscribe] = useState(false);

  useEffect(() => {
    dispatch(setIsLoadingState(true));
    api
      .getService(Number(id))
      .then((res: IServiceExtended) => {
        sortTariffs(res);
        setSelectService(res);
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setIsLoadingState(false)));
  }, []);

  useEffect(() => {
    if (selectService.tariff) {
      setSelectedTariff(selectService.tariff[0]);
    }
  }, [selectService]);

  useEffect(() => {
    //ищем соответствие выбранного сервиса со списом подписок пользователя
    if (userSubscriptions) {
      const matchingSubscription = findMatching(selectService);
      if (matchingSubscription) {
        setAlreadySubscribe(true);
        setUserSubscription(matchingSubscription);
      }
    }
  }, [userSubscriptions, selectService]);
  function findMatching(service: IServiceExtended) {
    return userSubscriptions.find(
      (item) => item.tariff.services.id === service.id
    );
  }

  function sortTariffs(service: IServiceExtended) {
    service.tariff = service.tariff.sort(function (a, b) {
      if (Number(a.services_duration) < Number(b.services_duration)) {
        return -1;
      }
      if (Number(a.services_duration) > Number(b.services_duration)) {
        return 1;
      }
      return 0;
    });
    return service;
  }

  const tabs = () => {
    return selectService.tariff.map((item, index) => (
      <Tab key={`tariff-tab-${index}`} label={item.name} value={`${index}`} />
    ));
  };

  const tariffInfo = (tariff: ITariff) => {
    if (tariff.tariff_promo_price || tariff.tariff_promo_price !== null) {
      if (tariff.services_duration === '1') {
        return (
          <>
            <p className="service-page__costs">
              <span className="service-page__cost service-page__cost_accent">{`${tariff.tariff_full_price} ₽`}</span>{' '}
              <span className="service-page__cost">{`${tariff.tariff_promo_price} ₽`}</span>{' '}
              за месяц
            </p>
            <p className="service-page__tariff-description">
              первый месяц {tariff.tariff_promo_price} ₽, последующие{' '}
              {tariff.tariff_full_price} ₽
            </p>
          </>
        );
      } else {
        return (
          <>
            <p className="service-page__costs">
              <span className="service-page__cost">{`${Math.trunc(
                tariff.tariff_promo_price / Number(tariff.services_duration)
              )}`}</span>{' '}
              ₽ за месяц
            </p>
            <p className="service-page__tariff-description">
              Всего за {tariff.services_duration} месяцев{' '}
              {tariff.tariff_promo_price} ₽
            </p>
          </>
        );
      }
    } else {
      return (
        <>
          <p className="service-page__costs">
            <span className="service-page__cost">{`${Math.trunc(
              tariff.tariff_full_price / Number(tariff.services_duration)
            )} ₽`}</span>{' '}
            за месяц
          </p>
          <p className="service-page__tariff-description">
            Всего за {tariff.services_duration} месяцев{' '}
            {tariff.tariff_full_price} ₽
          </p>
        </>
      );
    }
  };

  const tabPanels = () => {
    return selectService.tariff.map((item, index) => (
      <TabPanel sx={{ p: 0 }} key={`tariff-panel-${index}`} value={`${index}`}>
        <h3 className="service-page__tariff-heading">{item.name}</h3>
        {tariffInfo(item)}
      </TabPanel>
    ));
  };

  function handleTabChange(_event: React.SyntheticEvent, newValue: string) {
    setTabValue(newValue);
    setSelectedTariff(selectService.tariff[Number(newValue)]);
  }

  function autopaymentButtonHandler() {
    api
      .setAutopayment(
        userSubscription.id,
        userSubscription.auto_payment ? false : true
      )
      .then((res) => setUserSubscription(res))
      .catch(console.error);
  }

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <section className="service-page">
        <ServiceHeader selectSubscription={selectService} />
        <div className="service-page__description-wrap">
          <p className="service-page__description-title">Описание</p>
          <p className="service-page__description">
            {selectService.description}
          </p>
          <Link className="link" to={selectService.link} target="_blank">
            Перейти на сервис
          </Link>
        </div>
        {!alreadySubscribe ? (
          <TabContext value={tabValue}>
            <TabList
              onChange={handleTabChange}
              TabIndicatorProps={{
                sx: { display: 'none' },
              }}
            >
              {selectService && selectService.tariff ? tabs() : ''}
            </TabList>
            <div className="service-page__tab-panel">
              {selectService && selectService.tariff ? tabPanels() : ''}
              <Button
                to={'/purchase'}
                state={{
                  subscription: selectService,
                  selectTariff: selectedTariff,
                }}
                component={Link}
                variant="contained"
              >
                Подключить
              </Button>
            </div>
          </TabContext>
        ) : (
          <>
            <h2>Подписка действует</h2>
            <p>
              {userSubscription.auto_payment
                ? 'Ваша подписка включает в себя сервис автопродления. Мы заранее напомним Вам о предстоящем платеже по электронной почте.'
                : 'Сейчас автопродление отключено, но можете включить его по кнопке ниже'}
            </p>
            <AutopaymentButton
              onClick={autopaymentButtonHandler}
              $active={userSubscription.auto_payment}
            >
              {userSubscription.auto_payment
                ? 'Отключить автопродление'
                : 'Включить автопродление'}
            </AutopaymentButton>
          </>
        )}
      </section>
    );
  }
}

export default ServicePage;
