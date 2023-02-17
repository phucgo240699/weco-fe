import _ from 'lodash';
import apiProvider from 'services';
import actions from 'store/actions';
import { PageRoutes } from 'constants/index';
import { clearPostsReducer } from 'store/reducers/postsReducer';
import { all, call, put, takeLeading } from 'redux-saga/effects';
import { SignInRequestType, SignUpRequestType } from 'types/authenticationTypes';
import { clearAuthenticationReducer, updateAuth } from 'store/reducers/authenticationReducer';
import { clearSessionReducer, closeLoader, showLoader } from 'store/reducers/sessionReducer';

function* signInSaga({ payload } : { type: string, payload: SignInRequestType }) : any {
   try {
      yield put(showLoader())
      const { data } = yield call(apiProvider.authentication.signIn, { payload })
      if (_.isNil(data)) return;
      yield put(updateAuth(data))
      payload.navigate?.(PageRoutes.Home)
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

function* signUpSaga({ payload } : { type: string, payload: SignUpRequestType }) : any {
   try {
      yield put(showLoader())
      const { data } = yield call(apiProvider.authentication.signUp, { payload })
      if (_.isNil(data)) return;
      payload.navigate?.(PageRoutes.SignIn)
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
