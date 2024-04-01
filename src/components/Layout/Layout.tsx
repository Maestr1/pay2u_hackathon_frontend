import Header from './Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { ReactElement, useState } from 'react';




function Layout(): ReactElement {


  const [navIsOpen, setNavIsOpen] = useState(false);

  function handleMenuOpen() {
    setNavIsOpen(!navIsOpen);
  }

  function handleMenuClose() {
    setTimeout(()=> setNavIsOpen(false), 300);
  }

  return (
    <>
      <Header handleMenuClose={handleMenuClose} handleMenuOpen={ handleMenuOpen } isMenuOpen={ navIsOpen }/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Layout;
