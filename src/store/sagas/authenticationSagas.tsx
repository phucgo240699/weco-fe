import { call, put, takeLeading } from 'redux-saga/effects'
import apiProvider from 'services';
import actions from 'store/actions';
import i18n from 'locales/index';
import { updateProfile } from 'store/reducers/authentication';
import { closeLoader, showLoader } from 'store/reducers/sessionReducer';
import { SignInRequestType } from 'types/authenticationTypes';

function* signIn({ body } : { type: string, body: SignInRequestType }) : any {
   try {
      yield put(showLoader())
      const response = yield call(apiProvider.authentication.signIn, body)
      console.log('response', response)
      yield put(updateProfile(response))
   } catch (e) {
      alert(i18n.t('authentication.signIn.inCorrectInfo'))
   } finally {
      yield put(closeLoader())
   }
}

function* authenticationSaga() {
  yield takeLeading(actions.authentication.SIGN_IN, signIn)
}

export default authenticationSaga
