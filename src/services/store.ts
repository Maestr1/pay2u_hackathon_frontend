import { configureStore } from '@reduxjs/toolkit';

import { reducer as availableSubscriptionsReducer } from './availableSubscriptionsSlice.ts'

export const store = configureStore({
  reducer: {
    availableSubscriptionsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers()
  }
});
