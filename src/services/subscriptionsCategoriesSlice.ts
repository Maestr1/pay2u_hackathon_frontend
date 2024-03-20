import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TSubscriptionsCategories } from '../utils/fakeData.ts';

interface ISubscriptionsCategoriesState {
  subscriptionsCategories: TSubscriptionsCategories
}

const initialState: ISubscriptionsCategoriesState = {
  subscriptionsCategories: []
}

const subscriptionsCategoriesSlice = createSlice({
  name: 'subscriptionsCategories',
  initialState,
  reducers: {
    addSubscriptionsCategories: (state, action: PayloadAction<TSubscriptionsCategories>) => {
      state.subscriptionsCategories = action.payload;
    }
  }
});

export const { addSubscriptionsCategories } = subscriptionsCategoriesSlice.actions;
export const reducer = subscriptionsCategoriesSlice.reducer;
