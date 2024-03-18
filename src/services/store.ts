import { configureStore } from '@reduxjs/toolkit';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers().concat(offline(offlineConfig));
  }
});
