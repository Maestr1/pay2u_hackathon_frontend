import { ISubscription } from '../utils/data.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAvailableSubscriptionsState {
  availableSubscriptions: ISubscription[]
}

const initialState: IAvailableSubscriptionsState = {
  availableSubscriptions: []
};

const availableSubscriptionsSlice = createSlice({
  name: 'availableSubscriptions',
  initialState,
  reducers: {
    addAvailableSubscriptions: (state, action: PayloadAction<ISubscription[]>) => {
      state.availableSubscriptions = action.payload;
    },
    removeAvailableSubscriptions: (state, action: PayloadAction<string>) => {
      state.availableSubscriptions = state.availableSubscriptions.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addAvailableSubscriptions, removeAvailableSubscriptions } = availableSubscriptionsSlice.actions;
export const reducer = availableSubscriptionsSlice.reducer;
