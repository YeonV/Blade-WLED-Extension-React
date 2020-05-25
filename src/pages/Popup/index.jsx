import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';

import { ThemeProvider } from '@chakra-ui/core';
import { theme } from '@chakra-ui/core';
import {
  store,
  persistor,
  Provider as PersistantStoreProvider,
} from '../../lib/create-store';

window.persistor = persistor;
window.store = store;

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    red: {
      500: '#800000',
    },
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
};

render(
  <PersistantStoreProvider>
    <ThemeProvider theme={customTheme}>
      <Popup />
    </ThemeProvider>
  </PersistantStoreProvider>,
  window.document.querySelector('#app-container')
);
