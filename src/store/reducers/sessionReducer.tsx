import { createSlice } from '@reduxjs/toolkit';

export interface SessionState {
  loading: boolean;
}

const initialState : SessionState = {
  loading: false
}

export const sessionReducer = createSlice({
  name: 'session',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.loading = true
    },
    closeLoader: (state) => {
      state.loading = false
    }
  }
})

export const { showLoader, closeLoader } = sessionReducer.actions

export default sessionReducer.reducer