import i18n from 'locales/index';
import { AxiosResponse } from "axios";
import { authSelector } from "store/selectors";
import { call, put, select } from "redux-saga/effects";
import { HttpStatusCode } from "constants/index";
import apiProvider from 'services';
import { updateAuth } from 'store/reducers/authentication';
import actions from 'store/actions';

export function* apiCallProxy(
    fn: (({ payload, headers } : { payload?: any, headers?: any }) => Promise<AxiosResponse<any, any>>),
    payload?: any
  ) : any {
  try {
    const auth = yield select(authSelector)
    const result = yield call(fn, {
      payload,
      headers: {
        accessToken: auth?.accessToken
      }
    })
    const { status, data, errors } = result

    switch (status) {
      case HttpStatusCode.Success:
        return data;
      case HttpStatusCode.NotAcceptable:
        alert(i18n.t(errors[0]));
        return;
      case HttpStatusCode.ExpiredAccessToken:
        const refreshTokenResult = yield call(apiProvider.authentication.refreshToken, { payload: { refreshToken: auth.refreshToken } })
        const refreshTokenStatus = refreshTokenResult.status
        if (refreshTokenStatus === HttpStatusCode.Success) {
          const newAuth = refreshTokenResult.data
          yield put(updateAuth(newAuth))
          return yield apiCallProxy(fn, { payload })
        } else {
          yield put(actions.authentication.signOut())
        }
        return;
      case HttpStatusCode.ExpiredRefreshToken:
        yield put(actions.authentication.signOut())
        return;
      case HttpStatusCode.InternalServerError:
        alert(i18n.t('error.internalServerError'))
        return;
      default:
        return;
    }
  } catch (error) {
    alert(i18n.t('error.internalServerError'))
  }
}