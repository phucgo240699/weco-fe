import postsSaga from "./postsSagas"
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(postsSaga)
}