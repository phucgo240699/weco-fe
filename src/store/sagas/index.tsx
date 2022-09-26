import postsSagas from "./postsSagas"
import authenticationSaga from "./authenticationSagas"
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(postsSagas)
  yield fork(authenticationSaga)
}