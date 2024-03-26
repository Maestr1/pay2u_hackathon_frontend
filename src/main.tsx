import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store.ts';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'InterVariable, sans-serif',
  },
  palette: {
    primary: {
      main: '#1D4ED8',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: () => ({
          boxShadow: 'none',
          width: '100%',
          fontSize: '16px',
          fontWeight: 400,
          paddingBlock: '12px',
          borderRadius: '8px',

          '&:active': {
            backgroundColor: '#1E40AF',
            boxShadow: 'none',
          },
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#1D4ED8',
          },
        }),
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </CssBaseline>
    </Provider>
  </React.StrictMode>
);
