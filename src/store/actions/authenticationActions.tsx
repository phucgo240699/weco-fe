import { SignInRequestType, SignUpRequestType } from 'types/authenticationTypes';

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

const SIGN_UP = 'SIGN_UP'
const signUp = (payload: SignUpRequestType) => {
  return {
    type: SIGN_UP,
    payload
  }
}

const authenticationActions = {
  signIn,
  signOut,
  signUp,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP
}

export default authenticationActions;
