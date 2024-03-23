import { ReactElement } from 'react';
import './CategoryCatalogPage.scss';
import SearchFrom from '../../SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../CardsSlider/CardsSlider.tsx';
import { useSelector } from '../../../hooks/store.ts';

function CategoryCatalogPage(): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions);
  const subscriptionsCategories = useSelector(store => store.subscriptionsCategoriesReducer.subscriptionsCategories);


  return (
    <section className='category-catalog'>
      <h1>Все сервисы</h1>
      <SearchFrom/>
      <CardsSlider title='Популярное' cardType="big" link="/services/category/popular" items={availableSubscriptions} slidesPerView={1.8}/>
      { subscriptionsCategories.map((item, index) => (
        <CardsSlider key={ `category-${ index }` } title={ `${ item.name }` } cardType="big"
                     link={ `/services/category/${ item.id }` } items={ availableSubscriptions }
                     slidesPerView={ 1.8 }/>
      )) }
    </section>
  );
}

export default CategoryCatalogPage;
