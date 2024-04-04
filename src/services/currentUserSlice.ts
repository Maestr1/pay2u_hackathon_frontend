import { IService, IUser } from '../utils/interfaces/interfaces.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrentUserState {
  currentUser: IUser;
  userSubscriptions: IService[];
}

const initialState: ICurrentUserState = {
  currentUser: {} as IUser,
  userSubscriptions: [],
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },
    addUserSubscriptions: (state, action: PayloadAction<IService[]>) => {
      state.userSubscriptions = action.payload;
    },
  },
});

export const { addCurrentUser, addUserSubscriptions } =
  currentUserSlice.actions;
export const reducer = currentUserSlice.reducer;
