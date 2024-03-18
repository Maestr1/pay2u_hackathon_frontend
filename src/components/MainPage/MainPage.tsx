import { ReactElement, useEffect } from 'react';
import SearchFrom from '../SearchFrom/SearchFrom.tsx';
import UserProducts from '../UserProducts/UserProducts.tsx';
import PopularProducts from '../PopularProducts/PopularProducts.tsx';
import AllProducts from '../AllProducts/AllProducts.tsx';
import NavBurger from '../Layout/Header/NavBurger/NavBurger.tsx';
import { IMainData } from '../../utils/data.ts';


interface MainPageProps {
  isMenuOpen: boolean,
  mainData: IMainData
}

function MainPage(props: MainPageProps): ReactElement {

  useEffect(() => {

  }, []);

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
