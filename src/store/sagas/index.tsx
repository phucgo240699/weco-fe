import postsSaga from "./posts"
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(postsSaga)
}