import { ReactElement } from 'react';
import './NavBurger.scss';
import { Link } from 'react-router-dom';
import homeIcon from '../../../../images/icons/home.svg';
import subscribesLogo from '../../../../images/icons/subscribes.svg';
import walletIcon from '../../../../images/icons/wallet.svg';
import calendarIcon from '../../../../images/icons/calendar.svg';
import faqIcon from '../../../../images/icons/faq.svg';
import Overlay from '../../../Overlay/Overlay.tsx';

interface NavBurgerProps {
  isMenuOpen: boolean;
}

function NavBurger(props: NavBurgerProps): ReactElement {
  return (
    <>
      <nav className={ `nav-burger nav-burger_${ props.isMenuOpen ? 'active' : '' }` }>
        <ul>
          <li>
            <Link className="link" to="/"><img src={ homeIcon } alt=""/>Главная</Link>
          </li>
          <li>
            <Link className="link" to="/"><img src={ subscribesLogo } alt=""/>Мои подписки</Link>
          </li>
          <li>
            <Link className="link" to="/"><img src={ walletIcon } alt=""/>История платежей</Link>
          </li>
          <li>
            <Link className="link" to="/"> <img src={ calendarIcon } alt=""/>Календарь</Link>
          </li>
          <li>
            <Link className="link" to="/"><img src={ faqIcon } alt=""/>FAQ</Link>
          </li>
        </ul>
      </nav>
      <Overlay isMenuOpen={ props.isMenuOpen }/>
    </>
  );
}

export default NavBurger;
