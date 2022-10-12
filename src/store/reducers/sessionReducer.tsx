import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentRouteType } from 'types/sessions';

export interface SessionState {
  loading: boolean;
  currentRoute: CurrentRouteType;
}

const initialState : SessionState = {
  loading: false,
  currentRoute: {
    path: '',
    props: undefined
  }
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
    navigateTo: (state, action: PayloadAction<CurrentRouteType>) => {
      state.currentRoute = action.payload
    },
    clearSessionReducer: (state) => {
      state.loading = false;
      state.currentRoute = {
        path: '',
        props: undefined
      }
    }
  }
})

export const { showLoader, closeLoader, clearSessionReducer, navigateTo } = sessionReducer.actions

export default sessionReducer.reducer