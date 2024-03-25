import { ReactElement, useEffect, useState } from 'react';
import SearchFrom from '../../SearchFrom/SearchFrom.tsx';
import { Link, useParams } from 'react-router-dom';
import Api from '../../../utils/Api.ts';
import { ISubscription } from '../../../utils/interfaces/interfaces.ts';
import './CategoryPage.scss';


function CategoryPage(): ReactElement {

  const { category } = useParams();
  const [subscriptionsArray, setSubscriptionsArray] = useState([]);

  useEffect(() => {
    Api.searchSubscriptions(category)
      .then(res => setSubscriptionsArray(res.content));

  }, []);

  useEffect(() => {
    if (subscriptionsArray.length > 0) {
      console.log(subscriptionsArray);
    }
  }, [subscriptionsArray]);

  return (
    <section className="category-page">
      <h1 className="title"></h1>
      <SearchFrom/>
      <ul className="category-page__list">
        { subscriptionsArray.map((item: ISubscription, index) => (
          <li key={`subscription-${index}`}>
            <Link className="link" to={ `/services/${ item.id }` }>
              <img src={ item.serviceIconSmall } alt=""/>
              <div className="category-page__decription">
                <h3>{ item.name }</h3>
                <p>{`От ${ item.cost } ₽ за 1 месяц`}</p>
              </div>
            </Link>
          </li>
        )) }
      </ul>
    </section>
  );
}

export default CategoryPage;
