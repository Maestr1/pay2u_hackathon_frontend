import { IUser } from '../utils/interfaces/interfaces.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrentUserState {
  currentUser: IUser
}

const initialState: ICurrentUserState = {
  currentUser: {} as IUser
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },
    // removeAvailableSubscriptions: (state, action: PayloadAction<string>) => {
    //   state.availableSubscriptions = state.availableSubscriptions.filter((item) => item.id !== action.payload);
    // }
  }
});


export const { addCurrentUser } = currentUserSlice.actions;
export const reducer = currentUserSlice.reducer;
