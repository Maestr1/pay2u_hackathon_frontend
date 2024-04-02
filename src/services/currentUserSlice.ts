import { ISubscription, IUser } from '../utils/interfaces/interfaces.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrentUserState {
  currentUser: IUser;
  apiToken: string;
  userSubscriptions: ISubscription[];
}

const initialState: ICurrentUserState = {
  currentUser: {} as IUser,
  apiToken: '',
  userSubscriptions: [],
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },
    addApiToken: (state, action: PayloadAction<string>) => {
      state.apiToken = action.payload;
    },
    addUserSubscriptions: (state, action: PayloadAction<ISubscription[]>) => {
      state.userSubscriptions = action.payload;
    },
  },
});

export const { addCurrentUser, addApiToken, addUserSubscriptions } =
  currentUserSlice.actions;
export const reducer = currentUserSlice.reducer;
