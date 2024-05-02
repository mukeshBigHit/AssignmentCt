import { createSlice } from '@reduxjs/toolkit';

export interface IAuthEmploye {
  data: any[];
}

export interface IEmploye {
  id: number;
  fname: string;
  lname: string;
  age : number;
  address: string;
  cityName: string;
}

const initialState: IAuthEmploye = {
  data: [],
};

export const employeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmploye: (state, action) => {
      state.data = [...state.data, action.payload];
    }
  },
});

export const { setEmploye } = employeSlice.actions;

export default employeSlice.reducer;
