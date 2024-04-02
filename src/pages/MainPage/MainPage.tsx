import { ReactElement } from 'react';
import SearchFrom from '../../components/SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../components/CardsSlider/CardsSlider.tsx';
import { useSelectorTyped } from '../../hooks/store.ts';
import CategoriesList from '../../components/CategoriesList/CategoriesList.tsx';
import Loader from '../Loader/Loader.tsx';
import MainPageUserCards from '../../components/MainPageUserCards/MainPageUserCards.tsx';

function MainPage(): ReactElement {
  const availableSubscriptions = useSelectorTyped(
    (store) => store.availableSubscriptionsReducer.availableSubscriptions
  );
  const subscriptionsCategories = useSelectorTyped(
    (store) => store.subscriptionsCategoriesReducer.subscriptionsCategories
  );
  const isLoading = useSelectorTyped((store) => store.pageStatesReducer.isLoading);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <SearchFrom />
        <MainPageUserCards />
        <CardsSlider
          slidesPerView={1.8}
          items={availableSubscriptions}
          title="Популярное"
          cardType="big"
          link="/services/category/popular"
        />
        <CategoriesList
          link="/services/all"
          subscriptionsCategories={subscriptionsCategories}
        />
      </>
    );
  }
}

export default MainPage;
