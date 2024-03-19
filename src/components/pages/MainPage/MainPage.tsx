import { ReactElement } from 'react';
import SearchFrom from '../../SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../CardsSlider/CardsSlider.tsx';



function MainPage(): ReactElement {



  return (
    <>
      <SearchFrom/>
      <CardsSlider title='Мои подписки' cardType='squere' link="/available-services"/>
      <CardsSlider title='Популярное' cardType='big' link="/available-services"/>
      <CardsSlider title='Каталог' cardType='small' link="/available-services"/>
    </>
  );
}

export default MainPage;
