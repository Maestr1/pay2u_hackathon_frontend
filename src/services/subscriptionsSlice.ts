import { ISubscription } from '../utils/interfaces/interfaces.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAvailableSubscriptionsState {
  availableSubscriptions: ISubscription[],
  userSubscriptions: ISubscription[],
}

const initialState: IAvailableSubscriptionsState = {
  availableSubscriptions: [],
  userSubscriptions: []
};

const availableSubscriptionsSlice = createSlice({
  name: 'availableSubscriptions',
  initialState,
  reducers: {
    addAvailableSubscriptions: (state, action: PayloadAction<ISubscription[]>) => {
      state.availableSubscriptions = action.payload;
    },
    addUserSubscriptions: (state, action: PayloadAction<ISubscription[]>) => {
      state.userSubscriptions = action.payload;
    },
    // removeAvailableSubscriptions: (state, action: PayloadAction<string>) => {
    //   state.availableSubscriptions = state.availableSubscriptions.filter((item) => item.id !== action.payload);
    // }
  }
});


export const { addAvailableSubscriptions, addUserSubscriptions } = availableSubscriptionsSlice.actions;
export const reducer = availableSubscriptionsSlice.reducer;
