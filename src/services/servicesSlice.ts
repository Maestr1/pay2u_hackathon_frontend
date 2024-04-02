import { IService, IServiceCategory } from '../utils/interfaces/interfaces.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAvailableServicesState {
  availableServices: IService[],
  categorizedServices: IServiceCategory[]
}

const initialState: IAvailableServicesState = {
  availableServices: [],
  categorizedServices: []
};

const availableServicesSlice = createSlice({
  name: 'availableServices',
  initialState,
  reducers: {
    addAvailableServices: (state, action: PayloadAction<IService[]>) => {
      state.availableServices = action.payload;
    },
    addCategorizedServices: (state, action: PayloadAction<IServiceCategory[]>) => {
      state.categorizedServices = action.payload;
    }
  }
});


export const { addAvailableServices, addCategorizedServices } = availableServicesSlice.actions;
export const reducer = availableServicesSlice.reducer;
