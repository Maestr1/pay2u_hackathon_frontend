import './App.scss';
import MainPage from './components/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';
import ErrorPage from './components/ErrorPage/ErrorPage.tsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index element={ <MainPage/> }/>
      </Route>
      <Route path="*" element={ <ErrorPage/> }/>
    </Routes>
  );
}

export default App;
