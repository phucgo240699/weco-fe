import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProfileType } from 'types/authenticationTypes';

export interface AuthenticationState {
  profile?: ProfileType
}

const initialState : AuthenticationState = {
  profile: undefined
}

export const authenticationReducer = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<ProfileType>) => {
      state.profile = action.payload
    }
  }
})

export const { updateProfile } = authenticationReducer.actions

export default authenticationReducer.reducer