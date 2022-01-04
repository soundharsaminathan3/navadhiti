import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from './Pages/Home';
import reducer from './Reducers';
const store = createStore(reducer);

const theme = createTheme({
  palette: {
    common: {
      bg: '#131921',
      active: '#ff9900',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
