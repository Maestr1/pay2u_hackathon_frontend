import React from 'react';
import './PopularProducts.scss'
import CardListHeader from '../CardListHeader/CardListHeader.tsx';
import MainCardList from '../MainCardList/MainCardList.tsx';

function PopularProducts(props): JSX.Element {
  return (
    <section>
      <CardListHeader title='Популярное' link='/'/>
      <MainCardList/>
    </section>
  );
}

export default PopularProducts;
