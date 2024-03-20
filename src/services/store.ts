import { configureStore } from '@reduxjs/toolkit';

import { reducer as availableSubscriptionsReducer } from './availableSubscriptionsSlice'
import { reducer as subscriptionsCategoriesReducer } from './subscriptionsCategoriesSlice'

export const store = configureStore({
  reducer: {
    availableSubscriptionsReducer,
    subscriptionsCategoriesReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers()
  }
});
