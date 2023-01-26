import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    },
    clearSessionReducer: (state) => {
      state.loading = false;
    }
  }
})

export const { showLoader, closeLoader, clearSessionReducer } = sessionReducer.actions

export const sessionSlices = sessionReducer.actions;

export default sessionReducer.reducer