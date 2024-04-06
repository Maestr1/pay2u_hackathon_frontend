import React, { ReactElement, useEffect, useState } from 'react';
import './ServicePage.scss';
import { Link, useParams } from 'react-router-dom';
import {
  IServiceExtended,
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

function ServicePage(): ReactElement {
  const { id } = useParams();
  const [selectSubscription, setSelectSubscription] =
    useState<IServiceExtended>({} as IServiceExtended);
  const [tabValue, setTabValue] = useState('0');
  const [selectedTariff, setSelectedTariff] = useState({} as ITariff);
  const dispatch = useDispatchTyped();
  const isLoading = useSelectorTyped(
    (state) => state.pageStatesReducer.isLoading
  );

  useEffect(() => {
    dispatch(setIsLoadingState(true));
    api
      .getService(Number(id))
      .then((res: IServiceExtended) => {
        //Сортируем массив объектов по продолжительности подписки
        res.tariff = res.tariff.sort(function (a, b) {
          if (Number(a.services_duration) < Number(b.services_duration)) {
            return -1;
          }
          if (Number(a.services_duration) > Number(b.services_duration)) {
            return 1;
          }
          return 0;
        });
        return res;
      })
      .then((res) => setSelectSubscription(res))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setIsLoadingState(false)));
  }, []);

  const tabs = () => {
    return selectSubscription.tariff.map((item, index) => (
      <Tab key={`tariff-tab-${index}`} label={item.name} value={`${index}`} />
    ));
  };

  const tariffInfo = (tariff: ITariff) => {
    if (tariff.tariff_promo_price || tariff.tariff_promo_price !== 0) {
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
              <span className="service-page__cost service-page__cost_accent">{`${tariff.tariff_full_price} ₽`}</span>{' '}
              <span className="service-page__cost">{`${tariff.tariff_promo_price}`}</span>{' '}
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
        <p className="service-page__costs">
          <span className="service-page__cost">{`${Math.trunc(
            tariff.tariff_full_price / Number(tariff.services_duration)
          )} ₽`}</span>{' '}
          за месяц
        </p>
      );
    }
  };

  const tabPanels = () => {
    return selectSubscription.tariff.map((item, index) => (
      <TabPanel sx={{ p: 0 }} key={`tariff-panel-${index}`} value={`${index}`}>
        <h3 className="service-page__tariff-heading">{item.name}</h3>
        {tariffInfo(item)}
      </TabPanel>
    ));
  };

  function handleTabChange(_event: React.SyntheticEvent, newValue: string) {
    setTabValue(newValue);
    setSelectedTariff(selectSubscription.tariff[Number(newValue)]);
  }

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <section className="service-page">
        <ServiceHeader selectSubscription={selectSubscription} />
        <div className="service-page__description-wrap">
          <p className="service-page__description-title">Описание</p>
          <p className="service-page__description">
            {selectSubscription.description}
          </p>
          <Link className="link" to={selectSubscription.link} target="_blank">
            Перейти на сервис
          </Link>
        </div>
        <TabContext value={tabValue}>
          <TabList
            onChange={handleTabChange}
            TabIndicatorProps={{
              sx: { display: 'none' },
            }}
          >
            {selectSubscription && selectSubscription.tariff ? tabs() : ''}
          </TabList>
          <div className="service-page__tab-panel">
            {selectSubscription && selectSubscription.tariff ? tabPanels() : ''}
            <Button
              to={'/purchase'}
              state={{
                subscription: selectSubscription,
                selectTariff: selectedTariff,
              }}
              component={Link}
              variant="contained"
            >
              Подключить
            </Button>
          </div>
        </TabContext>
      </section>
    );
  }
}

export default ServicePage;
