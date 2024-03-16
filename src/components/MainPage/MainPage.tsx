import React from 'react';
import SearchFrom from '../SearchFrom/SearchFrom.tsx';
import UserCardList from '../UserCardList/UserCardList.tsx';
import MainCardList from '../MainCardList/MainCardList.tsx';

function MainPage() {

  return (
    <div>
      main page
      <SearchFrom/>
      <section>
        <h2>Мои подписки</h2>
        <UserCardList/>
      </section>
      <section>
        <h2>Популярное</h2>
        <MainCardList/>
      </section>
    </div>
  );
}

export default MainPage;
