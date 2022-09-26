import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthContextType } from 'types/authenticationTypes';

export interface AuthenticationState {
  auth?: AuthContextType
}

const initialState : AuthenticationState = {
  auth: undefined
}

export const authenticationReducer = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signInSuccessfully: (state, action: PayloadAction<AuthContextType>) => {
      state.auth = action.payload
    }
  }
})

export const { signInSuccessfully } = authenticationReducer.actions

export default authenticationReducer.reducer