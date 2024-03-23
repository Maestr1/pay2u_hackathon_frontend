import { ReactElement } from 'react';
import CardListHeader from '../CardListHeader/CardListHeader.tsx';
import CardList from '../CardList/CardList.tsx';
import { TSubscriptionsCategories } from '../../utils/fakeData.ts';

interface ICategoriesListProps {
  subscriptionsCategories: TSubscriptionsCategories,
  link: string
}

function CategoriesList(props: ICategoriesListProps): ReactElement {
  return (
    <section>
      <CardListHeader title={ 'Каталог' } link={ props.link }/>
      <CardList items={ props.subscriptionsCategories }/>
    </section>
  );
}

export default CategoriesList;
