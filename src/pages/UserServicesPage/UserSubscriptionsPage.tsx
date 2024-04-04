import { ReactElement, useState } from 'react';
import { useSelectorTyped } from '../../hooks/store';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import styled from 'styled-components';
import UserCardList from '../../components/UserCardList/UserCardList';

const CategoryImg = styled.img`
  max-width: 20px;
`;

function UserSubscriptionsPage(): ReactElement {
  const [tabValue, setTabValue] = useState('0');
  const userSubscriptions = useSelectorTyped(
    (store) => store.servicesReducer.popularServices
  );
  const categories = useSelectorTyped(
    (store) => store.servicesCategoriesReducer.servicesCategories
  );



  function handleTabChange(_event: React.SyntheticEvent, newValue: string) {
    setTabValue(newValue);
  }
  console.log(categories);
  const tabs = () => {
    return categories.map((item, index) => (
      <Tab
        key={`category-tab-${index}`}
        label={<CategoryImg src={item.icon} alt={item.name} />}
        value={`${index + 1}`}
      />
    ));
  };

  return (
    <section>
      <TabContext value={tabValue}>
        <TabList
          onChange={handleTabChange}
          TabIndicatorProps={{
            sx: { display: 'none' },
          }}
        >
          <Tab label="Все" value="0" />
          {tabs()}
        </TabList>
        <TabPanel sx={{ p: 0 }} value="0">
          <UserCardList cardsList={userSubscriptions} />
        </TabPanel>
      </TabContext>
    </section>
  );
}

export default UserSubscriptionsPage;
