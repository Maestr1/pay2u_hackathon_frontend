import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPageStatesState {
  isLoading: boolean;
}

const initialState: IPageStatesState = {
  isLoading: false,
};

const pageStatesSlice = createSlice({
  name: 'availableSubscriptions',
  initialState,
  reducers: {
    setIsLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoadingState } = pageStatesSlice.actions;
export const reducer = pageStatesSlice.reducer;
