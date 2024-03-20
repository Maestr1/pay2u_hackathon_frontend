import { ReactElement } from 'react';
import SearchFrom from '../../SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../CardsSlider/CardsSlider.tsx';
import { useSelector } from '../../../hooks/store.ts';



function MainPage(): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions)


  return (
    <>
      <SearchFrom/>
      <CardsSlider slidesPerView={3} items={availableSubscriptions} title='Мои подписки' cardType='square' link="/available-services"/>
      <CardsSlider slidesPerView={1.8} items={availableSubscriptions} title='Популярное' cardType='big' link="/available-services"/>
    </>
  );
}

export default MainPage;
