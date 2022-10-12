import rootSaga from 'store/sagas'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'store/reducers/index'
import storage from 'redux-persist/lib/storage'
import { routerReducer } from 'react-router-redux'
import { persistReducer, persistStore } from 'redux-persist'
import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const persistConfig = {
  key: 'root',
  storage,
}

// Reducer
const combinedReducers = combineReducers({
  ...rootReducer,
  routing: routerReducer
})
const persistedReducer = persistReducer(persistConfig, combinedReducers)

// Init store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware
})

// persistedStore
export const persistedStore = persistStore(store);

// Run saga
sagaMiddleware.run(rootSaga)

export const dispatch = (action: AnyAction) => {
  store.dispatch(action)
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
