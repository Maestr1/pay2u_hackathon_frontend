import Header from './Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { ReactElement } from 'react';

interface LayoutProps {
  handleClick: () => void,
  isMenuOpen: boolean
}

function Layout(props: LayoutProps): ReactElement {
  return (
    <>
      <Header handleClick={ props.handleClick } isMenuOpen={ props.isMenuOpen }/>
        <Outlet/>
    </>
  );
}

export default Layout;
