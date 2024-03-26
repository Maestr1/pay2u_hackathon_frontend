import React, { ReactElement, useEffect, useState } from 'react';
import './ServicePage.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from '../../hooks/store.ts';
import {
  ISubscription,
  ITariff,
} from '../../utils/interfaces/interfaces.ts';
import { Button, Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader.tsx';

function ServicePage(): ReactElement {
  const availableSubscriptions = useSelector(
    (store) => store.availableSubscriptionsReducer.availableSubscriptions
  );
  const { id } = useParams();
  const [selectSubscription, setSelectSubscription] = useState<ISubscription>(
    {} as ISubscription
  );
  const [tabValue, setTabValue] = useState('0');
  const [selectedTariff, setSelectedTariff] = useState({} as ITariff);

  useEffect(() => {
    const subscription = availableSubscriptions.find((item) => item.id === id);
    if (subscription) {
      setSelectSubscription(subscription);
      setSelectedTariff(subscription.serviceTariffList[0]);
    }
  }, [availableSubscriptions]);

  const tabs = () => {
    return selectSubscription.serviceTariffList.map((item, index) => (
      <Tab
        key={`tariff-tab-${index}`}
        label={item.tariffName}
        value={`${index}`}
      />
    ));
  };

  const tabPanels = () => {
    return selectSubscription.serviceTariffList.map((item, index) => (
      <TabPanel sx={{ p: 0 }} key={`tariff-panel-${index}`} value={`${index}`}>
        <h3 className="service-page__tariff-heading">{item.tariffName}</h3>
        <p className="service-page__costs">
          <span className="service-page__cost service-page__cost_accent">{`${item.tariffFullPrice} ₽`}</span>{' '}
          <span className="service-page__cost">{`${item.tariffPromoPrice}`}</span>{' '}
          ₽ за месяц
        </p>
        <p className="service-page__tariff-description">
          {`первый месяц ${item.tariffPromoPrice / item.tariffDuration} ₽, последующие ${item.tariffFullPrice / item.tariffDuration} ₽`}
        </p>
      </TabPanel>
    ));
  };

  function handleTabChange(_event: React.SyntheticEvent, newValue: string) {
    setTabValue(newValue);
    setSelectedTariff(selectSubscription.serviceTariffList[Number(newValue)])
  }

  return (
    <section className="service-page">
      <ServiceHeader selectSubscription={selectSubscription} />
      <div className="service-page__description-wrap">
        <p className="service-page__description-title">Описание</p>
        <p className="service-page__description">
          {selectSubscription.serviceDetails}
        </p>
        <Link className="link" to={selectSubscription.link}>
          Перейти на сервис
        </Link>
      </div>
      <TabContext value={tabValue}>
        <TabList
          TabIndicatorProps={{
            sx: { display: 'none' },
          }}
          sx={{
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-between',
            },
            '& button': {
              transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
              borderRadius: '12px',
              padding: '10px 12px',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.5',
              minHeight: 'inherit',
            },
            '& button:active': { bgcolor: '#1E40AF', color: '#FFFFFF' },
            '& button.Mui-selected': { bgcolor: '#1D4ED8', color: '#FFFFFF' },
          }}
          onChange={handleTabChange}
        >
          {selectSubscription && selectSubscription.serviceTariffList
            ? tabs()
            : ''}
        </TabList>
        <div className="service-page__tab-panel">
          {selectSubscription && selectSubscription.serviceTariffList
            ? tabPanels()
            : ''}
          <Button
            to={'/purchase'}
            state={{ subscription: selectSubscription, selectTariff: selectedTariff }}
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

export default ServicePage;
