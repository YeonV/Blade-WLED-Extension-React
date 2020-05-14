import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';
import connectionSlice from '../../slices/connection';
import wledEffectsSlice from '../../slices/wledEffects';
import wledPalettesSlice from '../../slices/wledPalettes';
import effectsSlice from '../../slices/effects';

const store = configureStore({
  reducer: combineReducers({
    effects: effectsSlice.reducer,
    connection: connectionSlice.reducer,
    wledEffects: wledEffectsSlice.reducer,
    wledPalettes: wledPalettesSlice.reducer,
  }),
});
window.store = store;

render(
  <ReduxProvider store={store}>
    <Popup />
  </ReduxProvider>,
  window.document.querySelector('#app-container')
);
