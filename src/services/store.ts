import { configureStore } from '@reduxjs/toolkit';

import { reducer as availableSubscriptionsReducer } from './availableSubscriptionsSlice'
import { reducer as subscriptionsCategoriesReducer } from './subscriptionsCategoriesSlice'
import { reducer as currentUserReducer } from './currentUserSlice'

export const store = configureStore({
  reducer: {
    availableSubscriptionsReducer,
    subscriptionsCategoriesReducer,
    currentUserReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers()
  }
});
