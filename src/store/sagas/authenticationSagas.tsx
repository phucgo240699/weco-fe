import i18n from 'locales/index';
import apiProvider from 'services';
import actions from 'store/actions';
import { call, put, takeLeading } from 'redux-saga/effects'
import { SignInRequestType } from 'types/authenticationTypes';
import { signInSuccessfully } from 'store/reducers/authentication';
import { closeLoader, showLoader } from 'store/reducers/sessionReducer';
import { push } from 'react-router-redux';
import { ScreenRoutes } from 'constants/index';

function* signInSaga({ payload } : { type: string, payload: SignInRequestType }) : any {
   try {
      yield put(showLoader())
      const response = yield call(apiProvider.authentication.signIn, payload)
      yield put(signInSuccessfully(response))
      yield put(push(ScreenRoutes.Home))
   } catch (e) {
      alert(i18n.t('authentication.signIn.inCorrectInfo'))
   } finally {
      yield put(closeLoader())
   }
}

function* authenticationSaga() {
  yield takeLeading(actions.authentication.SIGN_IN, signInSaga)
}

export default authenticationSaga
