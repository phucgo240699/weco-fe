import { store } from "store/index";
import { SignInRequestType } from 'types/authenticationTypes';

export const SIGN_IN = 'SIGN_IN'
export const signIn = (body: SignInRequestType) => {
  store.dispatch({
    type: SIGN_IN,
    payload: body
  })
}

export default {
  signIn,
  SIGN_IN
}