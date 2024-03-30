import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICategory } from '../utils/interfaces/interfaces.ts';

interface ISubscriptionsCategoriesState {
  subscriptionsCategories: ICategory[]
}

const initialState: ISubscriptionsCategoriesState = {
  subscriptionsCategories: []
}

const subscriptionsCategoriesSlice = createSlice({
  name: 'subscriptionsCategories',
  initialState,
  reducers: {
    addSubscriptionsCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.subscriptionsCategories = action.payload;
    }
  }
});

export const { addSubscriptionsCategories } = subscriptionsCategoriesSlice.actions;
export const reducer = subscriptionsCategoriesSlice.reducer;
