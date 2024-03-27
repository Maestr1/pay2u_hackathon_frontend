import { ReactElement } from 'react';
import './CardList.scss';
import { TSubscriptionsCategories } from '../../utils/fakeData.ts';
import { Link } from 'react-router-dom';
import SmallFullWidthCard from '../SmallFullWidthCard/SmallFullWidthCard.tsx';


interface ICardListProps {
  items: TSubscriptionsCategories;
}

function CardList(props: ICardListProps): ReactElement {
  return (
    <ul className="card-list">
      { props.items.map((card, index) => (
        <li key={ `category-card-${ index }` }>
          <Link className="card-list__link link" to={ `/services/category/${ card.name }` }>
            <SmallFullWidthCard description='от 99 ₽' card={ card }/>
          </Link>
        </li>
      )) }
    </ul>
  );
}

export default CardList;
