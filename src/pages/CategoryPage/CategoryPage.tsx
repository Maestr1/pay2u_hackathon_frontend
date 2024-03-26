import { ReactElement, useEffect, useState } from 'react';
import SearchFrom from '../../components/SearchFrom/SearchFrom.tsx';
import { Link, useParams } from 'react-router-dom';
import Api from '../../utils/Api.ts';
import { ISubscription } from '../../utils/interfaces/interfaces.ts';
import './CategoryPage.scss';

function CategoryPage(): ReactElement {
  const { category } = useParams();
  const [subscriptionsArray, setSubscriptionsArray] = useState([]);
  useEffect(() => {
    Api.searchSubscriptions(category).then((res) =>
      setSubscriptionsArray(res.content)
    );
  }, []);

  useEffect(() => {
    if (subscriptionsArray.length > 0) {
    }
  }, [subscriptionsArray]);

  function subscriptionList() {
    return subscriptionsArray.map((item: ISubscription, index) => {
      // ищем наименьшее значение tariffPromoPrice из всех тарифов
      const lowestPrice = Math.min(
        ...item.serviceTariffList.map((tariff) => tariff.tariffPromoPrice)
      );
      return (
        <li key={`subscription-${index}`}>
          <Link className="link" to={`/services/${item.id}`}>
            <img src={item.serviceIconSmall} alt="" />
            <div className="category-page__decription">
              <h3>{item.name}</h3>
              <p>{`От ${lowestPrice} ₽ за 1 месяц`}</p>
            </div>
          </Link>
        </li>
      );
    });
  }

  return (
    <section className="category-page">
      <h1 className="title"></h1>
      <SearchFrom />
      <ul className="category-page__list">{subscriptionList()}</ul>
    </section>
  );
}

export default CategoryPage;
