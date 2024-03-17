import React from 'react';
import './UserProducts.scss'
import UserCardList from '../UserCardList/UserCardList.tsx';
import CardListHeader from '../CardListHeader/CardListHeader.tsx';

function UserProducts(props) {
  return (
    <section className='user-subscriptions-section'>
      <CardListHeader title='Мои подписки' link='/'/>
      <UserCardList/>
    </section>
  );
}

export default UserProducts;