import React, { ReactElement, useEffect, useState } from 'react';
import './ServicePage.scss';
import { Link, useParams } from 'react-router-dom';
import { ISubscription, ITariff } from '../../utils/interfaces/interfaces.ts';
import { Button, Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader.tsx';
import api from '../../utils/api/Api.ts';

function ServicePage(): ReactElement {
  // const availableSubscriptions = useSelector(
  //   (store) => store.availableSubscriptionsReducer.availableSubscriptions
  // );
  const { id } = useParams();
  const [selectSubscription, setSelectSubscription] = useState<ISubscription>(
    {} as ISubscription
  );
  const [tabValue, setTabValue] = useState('0');
  const [selectedTariff, setSelectedTariff] = useState({} as ITariff);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const subscription = availableSubscriptions.find((item) => String(item.id) === id);
  //   if (subscription) {
  //     setSelectSubscription(subscription);
  //     setSelectedTariff(subscription.serviceTariffList[0]);
  //   }
  // }, [availableSubscriptions]);

  useEffect(() => {
    api.getService(Number(id))
      .then((res) => setSelectSubscription(res))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const tabs = () => {
    return selectSubscription.tariff.map((item, index) => (
      <Tab
        key={`tariff-tab-${index}`}
        label={item.name}
        value={`${index}`}
      />
    ));
  };

  const tabPanels = () => {
    return selectSubscription.tariff.map((item, index) => (
      <TabPanel sx={{ p: 0 }} key={`tariff-panel-${index}`} value={`${index}`}>
        <h3 className="service-page__tariff-heading">{item.name}</h3>
        <p className="service-page__costs">
          <span className="service-page__cost service-page__cost_accent">{`${item.tariff_promo_price} ₽`}</span>{' '}
          <span className="service-page__cost">{`${item.tariff_full_price}`}</span>{' '}
          ₽ за месяц
        </p>
        <p className="service-page__tariff-description">
          {`первый месяц ${
            item.tariff_full_price / item.services_duration
          } ₽, последующие ${item.tariff_promo_price / item.services_duration} ₽`}
        </p>
      </TabPanel>
    ));
  };

  function handleTabChange(_event: React.SyntheticEvent, newValue: string) {
    setTabValue(newValue);
    setSelectedTariff(selectSubscription.tariff[Number(newValue)]);
  }

  return (
    <section className="service-page">
      <ServiceHeader selectSubscription={selectSubscription} />
      <div className="service-page__description-wrap">
        <p className="service-page__description-title">Описание</p>
        <p className="service-page__description">
          {selectSubscription.description}
        </p>
        <Link className="link" to={selectSubscription.link}>
          Перейти на сервис
        </Link>
      </div>
      <TabContext value={tabValue}>
        <TabList
          onChange={handleTabChange}
          TabIndicatorProps={{
            sx: { display: 'none' },
          }}
          sx={{
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-between',
            },
            '& button': {
              transition:
                'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
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
        >
          {selectSubscription && selectSubscription.tariff
            ? tabs()
            : ''}
        </TabList>
        <div className="service-page__tab-panel">
          {selectSubscription && selectSubscription.tariff
            ? tabPanels()
            : ''}
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

export default ServicePage;
