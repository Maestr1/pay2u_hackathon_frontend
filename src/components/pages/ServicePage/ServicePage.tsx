import { ReactElement, useEffect, useState } from 'react';
import './ServicePage.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from '../../../hooks/store.ts';
import { ISubscription } from '../../../interfaces.ts';
import { Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import GlobalStyles from '@mui/material/GlobalStyles';

function ServicePage(): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions);
  const { id } = useParams();
  const [selectSubscription, setSelectSubscription] = useState<ISubscription>({} as ISubscription);
  const [tabValue, setTabValue] = useState('0');

  useEffect(() => {
    const subscription = availableSubscriptions.find(item => item.id === id);
    if (subscription) {
      setSelectSubscription(subscription);
    }
  }, [availableSubscriptions]);

  function handleChange(event: React.SyntheticEvent, newValue: string) {
    setTabValue(newValue);
  }

  return (
    <section className="service-page">
      <div className="service-page__header">
        <img src={ selectSubscription.serviceIconSmall } alt=""/>
        <h2>{ selectSubscription.name }</h2>
      </div>
      <div className="service-page__description-wrap">
        <p className="service-page__description-title">Описание</p>
        <p className="service-page__description">{ selectSubscription.serviceDetails }</p>
        <Link className="link" to={ selectSubscription.link }>Перейти на сервис</Link>
      </div>
      <TabContext className='qwe' sx={ {
        '& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected.MuiButtonBase-root-MuiTab-root': {
          bgcolor: '#666666',
          color: 'var(--white-100)',
          textTransform: 'none'
        }
      } } value={ tabValue }>
        <TabList onChange={ handleChange }>
          <Tab label="Кинопоиск" value="0"/>
          <Tab label="6 месяцев" value="1"/>
          <Tab label="12 месяцев" value="2"/>
        </TabList>
        <TabPanel value="0">qwe</TabPanel>
        <TabPanel value="1">123</TabPanel>
        <TabPanel value="2">zxc</TabPanel>
      </TabContext>
    </section>
  );
}

export default ServicePage;
