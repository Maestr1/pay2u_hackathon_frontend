import { configureStore } from '@reduxjs/toolkit';

import { reducer as availableSubscriptionsReducer } from './subscriptionsSlice';
import { reducer as subscriptionsCategoriesReducer } from './subscriptionsCategoriesSlice';
import { reducer as currentUserReducer } from './currentUserSlice';
import { reducer as pageStatesReducer } from './pageStatesSlice';

export const store = configureStore({
  reducer: {
    availableSubscriptionsReducer,
    subscriptionsCategoriesReducer,
    currentUserReducer,
    pageStatesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
