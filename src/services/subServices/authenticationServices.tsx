import baseService from 'services/config/baseService'
import { RefreshTokenRequestType, SignInRequestType, SignUpRequestType } from 'types/authenticationTypes'

const signIn = async ({ payload } : { payload?: SignInRequestType }) => {
  return baseService.postRequest({ url: 'users/signIn', body: payload })
}

const signUp = async ({ payload }: { payload?: SignUpRequestType }) => {
  return baseService.postRequest({ url: 'users/signUp', body: payload })
}

const refreshToken = async ({ payload } : { payload: RefreshTokenRequestType }) => {
  return baseService.postRequest({ url: 'users/refreshToken', body: payload })
}

const authenticationServices = { signIn, signUp, refreshToken }

export default authenticationServices;
