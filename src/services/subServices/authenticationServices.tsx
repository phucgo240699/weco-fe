import baseService from 'services/config/baseService'
import { SignInRequestType } from 'types/authenticationTypes'

const signIn = async (payload: SignInRequestType) => {
  return baseService.postRequest({ url: 'users/signIn', body: payload, headers: { withCredentials: true } })
}

const signUp = async () => {
  return baseService.postRequest({ url: 'users/signUp' })
}

const authenticationServices = { signIn, signUp }

export default authenticationServices;
