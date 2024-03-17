import React from 'react';
import Header from './Header/Header.tsx';
import { Outlet } from 'react-router-dom';

function Layout(props) {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Layout;
