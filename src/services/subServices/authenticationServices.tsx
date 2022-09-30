import baseService from 'services/config/baseService'
import { RefreshTokenRequestType, SignInRequestType } from 'types/authenticationTypes'

const signIn = async ({ payload } : { payload?: SignInRequestType }) => {
  return baseService.postRequest({ url: 'users/signIn', body: payload })
}

const signUp = async () => {
  return baseService.postRequest({ url: 'users/signUp' })
}

const refreshToken = async ({ payload } : { payload: RefreshTokenRequestType }) => {
  return baseService.postRequest({ url: 'users/refreshToken', body: payload })
}

const authenticationServices = { signIn, signUp, refreshToken }

export default authenticationServices;
