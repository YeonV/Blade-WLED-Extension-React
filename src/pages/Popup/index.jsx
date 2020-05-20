import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';

import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';
import appSlice from '../../slices/app';

import { persistStore, persistReducer } from 'redux-persist';
import { syncStorage } from 'redux-persist-webextension-storage';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@chakra-ui/core';
import { theme } from '@chakra-ui/core';

import wledEffectsSlice from '../../slices/wledEffects';
import wledPalettesSlice from '../../slices/wledPalettes';
import effectsSlice from '../../slices/effects';

const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: persistReducer(
    { key: 'app', storage: syncStorage },
    combineReducers({
      app: appSlice.reducer,
      effects: effectsSlice.reducer,
      wledEffects: wledEffectsSlice.reducer,
      wledPalettes: wledPalettesSlice.reducer,
    })
  ),
});

const persistor = persistStore(store);
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
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={customTheme}>
        <Popup />
      </ThemeProvider>
    </PersistGate>
  </ReduxProvider>,
  window.document.querySelector('#app-container')
);
