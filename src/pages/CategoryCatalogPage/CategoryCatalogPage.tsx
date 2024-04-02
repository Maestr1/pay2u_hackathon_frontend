import { ReactElement } from 'react';
import './CategoryCatalogPage.scss';
import SearchFrom from '../../components/SearchFrom/SearchFrom.tsx';
import CardsSlider from '../../components/CardsSlider/CardsSlider.tsx';
import { useSelectorTyped } from '../../hooks/store.ts';
import { ICategory, ISubscription } from '../../utils/interfaces/interfaces.ts';

function CategoryCatalogPage(): ReactElement {

  const availableSubscriptions:ISubscription[] = useSelectorTyped(store => store.availableSubscriptionsReducer.availableSubscriptions);
  const subscriptionsCategories:ICategory[] = useSelectorTyped(store => store.subscriptionsCategoriesReducer.subscriptionsCategories);


  return (
    <section className='category-catalog'>
      <h1 className='title'>Все сервисы</h1>
      <SearchFrom/>
      { subscriptionsCategories.map((item, index) => (
        <CardsSlider key={ `category-${ index }` } title={ `${ item.name }` } cardType="big"
                     link={ `/services/category/${ item.name }/` } items={ availableSubscriptions }
                     slidesPerView={ 1.8 }/>
      )) }
    </section>
  );
}

export default CategoryCatalogPage;
