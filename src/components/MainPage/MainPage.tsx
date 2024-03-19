import { ReactElement } from 'react';
import SearchFrom from '../SearchFrom/SearchFrom.tsx';
import UserProducts from '../UserProducts/UserProducts.tsx';
import PopularProducts from '../PopularProducts/PopularProducts.tsx';
import AllProducts from '../AllProducts/AllProducts.tsx';
import NavBurger from '../Layout/Header/NavBurger/NavBurger.tsx';
import { IAvailableSubscriptions, mainData } from '../../utils/data.ts';
import { useDispatch, useSelector } from '../../hooks/store.ts';
import { addAvailableSubscriptions } from '../../services/availableSubscriptionsSlice.ts';


interface MainPageProps {
  isMenuOpen: boolean,
  mainData: IAvailableSubscriptions
}

function MainPage(props: MainPageProps): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions)
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(addAvailableSubscriptions(mainData.availableSubscriptions))
  }

  function handleClick2() {
    console.log(availableSubscriptions)
  }

  return (
    <main>
      <button onClick={ handleClick }>Добавить доступные подписки в стор</button>
      <button onClick={ handleClick2 }>Показать данные из стора</button>
      <NavBurger isMenuOpen={ props.isMenuOpen }/>
      <SearchFrom/>
      <UserProducts/>
      <PopularProducts/>
      <AllProducts/>
    </main>
  );
}

export default MainPage;
