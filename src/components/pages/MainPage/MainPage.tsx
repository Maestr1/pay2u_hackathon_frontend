import { ReactElement } from 'react';
import SearchFrom from '../../SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../CardsSlider/CardsSlider.tsx';
import { useSelector } from '../../../hooks/store.ts';



function MainPage(): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions)


  return (
    <>
      <SearchFrom/>
      <CardsSlider items={availableSubscriptions} title='Мои подписки' cardType='square' link="/available-services"/>
      <CardsSlider items={availableSubscriptions} title='Популярное' cardType='big' link="/available-services"/>
      <CardsSlider items={availableSubscriptions} title='Каталог' cardType='small' link="/available-services"/>
    </>
  );
}

export default MainPage;
