import rootSaga from 'store/sagas'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'store/reducers/index'
import storage from 'redux-persist/lib/storage'
import { AnyAction, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware
})

export const persistedStore = persistStore(store);

sagaMiddleware.run(rootSaga)

export const dispatch = (action: AnyAction) => {
  store.dispatch(action)
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
