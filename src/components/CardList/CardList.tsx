import { ReactElement } from 'react';
import './CardList.scss';
import { TSubscriptionsCategories } from '../../utils/fakeData.ts';
import { Link } from 'react-router-dom';

interface ICardListProps {
  items: TSubscriptionsCategories;
}

function CardList(props: ICardListProps): ReactElement {
  return (
    <ul className="card-list">
      { props.items.map((card, index) => (
        <li key={ `category-card-${ index }` }>
          <Link className="card-list__link link" to={ `/services/category/${ card.id }` }>
            <div className="card-list__title">
              <img src={ card.icon } alt=""/>
              <h3>{ card.name }</h3>
            </div>
            <p>от 99р.</p>
          </Link>
        </li>
      )) }
    </ul>
  );
}

export default CardList;
