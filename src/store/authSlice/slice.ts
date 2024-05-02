import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  email: string;
  token: string;
}

const initialState: IAuthState = {
  email: '',
  token: '',
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        const {email, token} = action.payload;
        state.token = token;
        state.email = email;
    },
  },
});

export const { setAuth } = counterSlice.actions;

export default counterSlice.reducer;
