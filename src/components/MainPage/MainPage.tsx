import React from 'react';
import SearchFrom from '../SearchFrom/SearchFrom.tsx';
import UserProducts from '../UserProducts/UserProducts.tsx';
import PopularProducts from '../PopularProducts/PopularProducts.tsx';
import AllProducts from '../AllProducts/AllProducts.tsx';

function MainPage(): JSX.Element {

  return (
    <div>
      <SearchFrom/>
      <UserProducts/>
      <PopularProducts/>
      <AllProducts/>
    </div>
  );
}

export default MainPage;
