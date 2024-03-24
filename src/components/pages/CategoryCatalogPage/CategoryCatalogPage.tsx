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
      <h1 className='title'>Все сервисы</h1>
      <SearchFrom/>
      { subscriptionsCategories.map((item, index) => (
        <CardsSlider key={ `category-${ index }` } title={ `${ item.title }` } cardType="big"
                     link={ `/services/category/${ item.name }/` } items={ availableSubscriptions }
                     slidesPerView={ 1.8 }/>
      )) }
    </section>
  );
}

export default CategoryCatalogPage;
