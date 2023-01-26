import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthType } from 'types/authenticationTypes';

export interface AuthenticationState {
  auth?: AuthType
}

const initialState : AuthenticationState = {
  auth: undefined
}

export const authenticationReducer = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<AuthType>) => {
      state.auth = action.payload
    },
    clearAuthenticationReducer: (state) => {
      state.auth = undefined
    }
  }
})

export const { updateAuth, clearAuthenticationReducer } = authenticationReducer.actions

export const authenticationSlices = authenticationReducer.actions

export default authenticationReducer.reducer