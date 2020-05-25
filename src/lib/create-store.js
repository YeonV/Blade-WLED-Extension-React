import React from 'react';
import appSlice from '../slices/app';
import wledEffectsSlice from '../slices/wledEffects';
import wledPalettesSlice from '../slices/wledPalettes';
import effectsSlice from '../slices/effects';
import effectsJsonSlice from '../slices/effectsJson';
import { persistStore, persistReducer } from 'redux-persist';
import { syncStorage } from 'redux-persist-webextension-storage';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

export const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: persistReducer(
    { key: 'app', storage: syncStorage },
    combineReducers({
      app: appSlice.reducer,
      effects: effectsSlice.reducer,
      effectsJson: effectsJsonSlice.reducer,
      wledEffects: wledEffectsSlice.reducer,
      wledPalettes: wledPalettesSlice.reducer,
    })
  ),
});

export const persistor = persistStore(store);

export const Provider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
};
