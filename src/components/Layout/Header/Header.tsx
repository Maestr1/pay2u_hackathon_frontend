import { ReactElement } from 'react';
import './Header.scss';
import BurgerButton from './BurgerButton/BurgerButton.tsx';


interface HeaderProps {
  handleClick: () => void,
  isMenuOpen: boolean
}

function Header(props: HeaderProps): ReactElement {

  return (
    <header className="header">
      <BurgerButton onClick={ props.handleClick } isMenuOpen={ props.isMenuOpen }/>
    </header>
  );
}

export default Header;
