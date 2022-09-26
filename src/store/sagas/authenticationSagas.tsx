import _ from 'lodash';
import apiProvider from 'services';
import actions from 'store/actions';
import { all, put, takeLeading } from 'redux-saga/effects'
import { SignInRequestType } from 'types/authenticationTypes';
import { clearAuthenticationReducer, updateAuth } from 'store/reducers/authentication';
import { closeLoader, showLoader } from 'store/reducers/sessionReducer';
import { push } from 'react-router-redux';
import { ScreenRoutes } from 'constants/index';
import { apiCallProxy } from './apiCallProxy';
import { clearPostsReducer } from 'store/reducers/postsReducer';

function* signInSaga({ payload } : { type: string, payload: SignInRequestType }) : any {
   try {
      yield put(showLoader())
      const data = yield apiCallProxy(apiProvider.authentication.signIn, { payload })
      if (_.isNil(data)) return;
      yield put(updateAuth(data))
      yield put(push(ScreenRoutes.Home))
   } catch (e) {
      _.noop()
   } finally {
      yield put(closeLoader())
   }
}

function* signOutSaga() : any {
   try {
      yield all([
         put(clearAuthenticationReducer()),
         put(clearPostsReducer())
      ])
   } catch (e) {
      _.noop()
   }
}

function* authenticationSaga() {
  yield all([
   takeLeading(actions.authentication.SIGN_IN, signInSaga),
   takeLeading(actions.authentication.SIGN_OUT, signOutSaga)
  ])
}

export default authenticationSaga
