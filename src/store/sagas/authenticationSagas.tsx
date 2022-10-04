import _ from 'lodash';
import apiProvider from 'services';
import actions from 'store/actions';
import { push } from 'react-router-redux';
import { ScreenRoutes } from 'constants/index';
import { SignInRequestType } from 'types/authenticationTypes';
import { clearPostsReducer } from 'store/reducers/postsReducer';
import { all, put, takeLeading } from 'redux-saga/effects';
import { clearAuthenticationReducer, updateAuth } from 'store/reducers/authentication';
import { clearSessionReducer, closeLoader, showLoader } from 'store/reducers/sessionReducer';
import { apiCallProxy } from './apiCallProxy';

function* signInSaga({ payload } : { type: string, payload: SignInRequestType }) : any {
   try {
      yield put(showLoader())
      const data = yield apiCallProxy(apiProvider.authentication.signIn, payload)
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
         put(clearPostsReducer()),
         put(clearSessionReducer())
      ])
   } catch (e) {
      _.noop()
   }
}

function* signUpSaga({ payload } : { type: string, payload: SignInRequestType }) : any {
   try {
      yield put(showLoader())
      console.log('signUpSaga')
      const data = yield apiCallProxy(apiProvider.authentication.signUp, payload)
      if (_.isNil(data)) return;
      yield put(push(ScreenRoutes.SignIn))
   } catch (e) {
      _.noop()
   } finally {
      yield put(closeLoader())
   }
}

function* authenticationSaga() {
  yield all([
   takeLeading(actions.authentication.SIGN_IN, signInSaga),
   takeLeading(actions.authentication.SIGN_OUT, signOutSaga),
   takeLeading(actions.authentication.SIGN_UP, signUpSaga)
  ])
}

export default authenticationSaga
