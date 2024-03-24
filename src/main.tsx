import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store.ts';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'InterVariable, sans-serif',
  },
  palette: {
    primary: {
      main: '#1D4ED8',
    }
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',

        }
      },
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <BrowserRouter basename={ import.meta.env.BASE_URL }>
          <App/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
