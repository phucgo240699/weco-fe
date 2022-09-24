import baseService from 'services/config/baseService'
import { SignInRequestType } from 'types/authenticationTypes'

const signIn = async (body: SignInRequestType) => {
  return baseService.postRequest({ url: '/signIn', body })
}

const signUp = async () => {
  return baseService.postRequest({ url: '/signUp' })
}

export default { signIn, signUp }