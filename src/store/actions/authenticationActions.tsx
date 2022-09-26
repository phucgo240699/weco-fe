import { store } from "store/index";
import { SignInRequestType } from 'types/authenticationTypes';

const SIGN_IN = 'SIGN_IN'
const signIn = (payload: SignInRequestType) => {
  store.dispatch({
    type: SIGN_IN,
    payload
  })
}

const authenticationActions = {
  signIn,
  SIGN_IN
}

export default authenticationActions;
