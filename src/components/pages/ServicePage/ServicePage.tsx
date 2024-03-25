import React, { ReactElement, useEffect, useState } from 'react';
import './ServicePage.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from '../../../hooks/store.ts';
import { ISubscription } from '../../../utils/interfaces/interfaces.ts';
import { Button, Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import ServiceHeader from '../../ServiceHeader/ServiceHeader.tsx';

function ServicePage(): ReactElement {
  const availableSubscriptions = useSelector(
    (store) => store.availableSubscriptionsReducer.availableSubscriptions
  );
  const { id } = useParams();
  const [selectSubscription, setSelectSubscription] = useState<ISubscription>(
    {} as ISubscription
  );
  const [tabValue, setTabValue] = useState('0');

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
          {`первый месяц ${item.tariffPromoPrice} ₽, последующие ${item.tariffFullPrice} ₽
Кешбэк будет начислен до 25 числа месяца, следующего за текущим.`}
        </p>
      </TabPanel>
    ));
  };

  useEffect(() => {
    const subscription = availableSubscriptions.find((item) => item.id === id);
    if (subscription) {
      setSelectSubscription(subscription);
    }
  }, [availableSubscriptions]);

  function handleChange(_event: React.SyntheticEvent, newValue: string) {
    setTabValue(newValue);
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
            '& button': {
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
          onChange={handleChange}
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
            sx={{
              width: '100%',
              fontSize: '16px',
              fontWeight: 400,
              paddingBlock: '12px',
              borderRadius: '8px',
            }}
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
