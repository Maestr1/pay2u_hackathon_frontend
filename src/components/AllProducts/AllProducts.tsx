import React from 'react';
import './AllProducts.scss'
import CardListHeader from '../CardListHeader/CardListHeader.tsx';
import SmallCardList from '../SmallCardList/SmallCardList.tsx';

function AllProducts(props) {
  return (
    <section>
      <CardListHeader title='Все сервисы' link='/'/>
      <SmallCardList/>
    </section>
  );
}

export default AllProducts;
