import { ReactElement } from 'react';
import SearchFrom from '../../components/SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../components/CardsSlider/CardsSlider.tsx';
import { useSelectorTyped } from '../../hooks/store.ts';
import CategoriesList from '../../components/CategoriesList/CategoriesList.tsx';
import Loader from '../Loader/Loader.tsx';
import MainPageUserCards from '../../components/MainPageUserCards/MainPageUserCards.tsx';
import dashboard from '../../images/other_images/Info.png'
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  margin-top: 25px;
`

function MainPage(): ReactElement {
  const popularServices = useSelectorTyped(
    (store) => store.servicesReducer.popularServices
  );
  const subscriptionsCategories = useSelectorTyped(
    (store) => store.servicesCategoriesReducer.servicesCategories
  );
  const isLoading = useSelectorTyped((store) => store.pageStatesReducer.isLoading);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <SearchFrom />
        <Img src={dashboard} alt="" />
        <MainPageUserCards />
        <CardsSlider
          slidesPerView={1.8}
          items={popularServices.services}
          title="Популярное"
          cardType="big"
          link="/services/category/popular"
        />
        <CategoriesList
          link="/services/all"
          servicesCategories={subscriptionsCategories}
        />
      </>
    );
  }
}

export default MainPage;
