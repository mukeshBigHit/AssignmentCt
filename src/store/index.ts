import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice/slice'
import employeReducer from './employeSlice/slice'

export const store = configureStore({
  reducer: {
    auth : authReducer,
    employee : employeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch