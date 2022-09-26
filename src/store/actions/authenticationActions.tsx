import { SignInRequestType } from 'types/authenticationTypes';

const SIGN_IN = 'SIGN_IN'
const signIn = (payload: SignInRequestType) => {
  return {
    type: SIGN_IN,
    payload
  }
}

const SIGN_OUT = 'SIGN_OUT'
const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

const authenticationActions = {
  signIn,
  signOut,
  SIGN_IN,
  SIGN_OUT
}

export default authenticationActions;
