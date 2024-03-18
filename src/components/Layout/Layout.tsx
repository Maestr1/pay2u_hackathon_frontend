import Header from './Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { ReactElement } from 'react';

function Layout(): ReactElement {
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
