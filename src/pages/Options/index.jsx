import React from 'react';
import { render } from 'react-dom';

import Options from './Options';
import './index.css';
import { Provider as PersistantStoreProvider } from '../../lib/create-store';
import { ThemeProvider } from '@chakra-ui/core';
import { theme } from '@chakra-ui/core';

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
      <Options />
    </ThemeProvider>
  </PersistantStoreProvider>,
  window.document.querySelector('#app-container')
);
