import {useState} from 'react';
import './Header.scss'
import NavBurger from './NavBurger/NavBurger.tsx';
import BurgerButton from './BurgerButton/BurgerButton.tsx';

function Header(props) {

  const [navIsOpen, setNavIsOpen] = useState(false);

  function handleClick() {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <header className='header'>
      <BurgerButton onClick={handleClick} isMenuOpen={navIsOpen}/>
      <NavBurger isMenuOpen={navIsOpen}/>
    </header>
  );
}

export default Header;
