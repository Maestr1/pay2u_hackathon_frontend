import React from 'react';
import { Link } from 'react-router-dom';
import SearchFrom from '../SearchFrom/SearchFrom.tsx';
import UserCardList from '../UserCardList/UserCardList.tsx';
import MainCardList from '../MainCardList/MainCardList.tsx';
import UserProducts from '../UserProducts/UserProducts.tsx';
import PopularProducts from '../PopularProducts/PopularProducts.tsx';
import AllProducts from '../AllProducts/AllProducts.tsx';

function MainPage() {

  return (
    <div>
      main page
      <SearchFrom/>
      <UserProducts/>
      <PopularProducts/>
      <AllProducts/>
    </div>
  );
}

export default MainPage;
