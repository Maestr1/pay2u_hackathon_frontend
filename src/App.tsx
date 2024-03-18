import './App.scss';
import MainPage from './components/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';
import ErrorPage from './components/ErrorPage/ErrorPage.tsx';
import { ReactElement, useState } from 'react';

function App(): ReactElement {



  const [navIsOpen, setNavIsOpen] = useState(false);

  function handleClick() {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <Routes>
      <Route path="/" element={ <Layout handleClick={ handleClick } isMenuOpen={ navIsOpen }/> }>
        <Route index element={ <MainPage isMenuOpen={ navIsOpen }/> }/>
      </Route>
      <Route path="*" element={ <ErrorPage/> }/>
    </Routes>
  );
}

export default App;
