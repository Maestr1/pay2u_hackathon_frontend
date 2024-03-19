import Header from './Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { ReactElement, useState } from 'react';


function Layout(): ReactElement {


  const [navIsOpen, setNavIsOpen] = useState(false);

  function handleClick() {
    setNavIsOpen(!navIsOpen);
  }
  return (
    <>
      <Header handleClick={ handleClick } isMenuOpen={ navIsOpen }/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Layout;
