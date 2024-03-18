import { ReactElement } from 'react';
import SearchFrom from '../SearchFrom/SearchFrom.tsx';
import UserProducts from '../UserProducts/UserProducts.tsx';
import PopularProducts from '../PopularProducts/PopularProducts.tsx';
import AllProducts from '../AllProducts/AllProducts.tsx';
import NavBurger from '../Layout/Header/NavBurger/NavBurger.tsx';


interface MainPageProps {
  isMenuOpen: boolean
}

function MainPage(props: MainPageProps): ReactElement {

  return (
    <main>
      <NavBurger isMenuOpen={ props.isMenuOpen }/>
      <SearchFrom/>
      <UserProducts/>
      <PopularProducts/>
      <AllProducts/>
    </main>
  );
}

export default MainPage;
