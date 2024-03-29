import { ReactElement } from 'react';
import SearchFrom from '../../components/SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../components/CardsSlider/CardsSlider.tsx';
import { useSelector } from '../../hooks/store.ts';
import CategoriesList from '../../components/CategoriesList/CategoriesList.tsx';


function MainPage(): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions);
  const subscriptionsCategories = useSelector(store => store.subscriptionsCategoriesReducer.subscriptionsCategories);


  return (
    <>
      <SearchFrom/>
      <CardsSlider slidesPerView={ 2.8 } items={ availableSubscriptions } title="Мои подписки" cardType="square"
                   link="/services/my-services"/>
      <CardsSlider slidesPerView={ 1.8 } items={ availableSubscriptions } title="Популярное" cardType="big"
                   link="/services/category/popular"/>
      <CategoriesList link="/services/all" subscriptionsCategories={ subscriptionsCategories }/>
    </>
  );
}

export default MainPage;
