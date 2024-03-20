import { ReactElement } from 'react';
import SearchFrom from '../../SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../CardsSlider/CardsSlider.tsx';
import { useSelector } from '../../../hooks/store.ts';
import CardListHeader from '../../CardListHeader/CardListHeader.tsx';
import CardList from '../../CardList/CardList.tsx';


function MainPage(): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions);
  const subscriptionsCategories = useSelector(store => store.subscriptionsCategoriesReducer.subscriptionsCategories);


  return (
    <>
      <SearchFrom/>
      <CardsSlider slidesPerView={ 3 } items={ availableSubscriptions } title="Мои подписки" cardType="square"
                   link="/services/my-services"/>
      <CardsSlider slidesPerView={ 1.8 } items={ availableSubscriptions } title="Популярное" cardType="big"
                   link="/services/category/popular"/>
      <section>
        <CardListHeader title={ 'Каталог' } link="/services/available"/>
        <CardList items={subscriptionsCategories}/>
      </section>
    </>
  );
}

export default MainPage;
