import baseService from 'services/config/baseService'

const signIn = async () => {
  return baseService.postRequest('/signIn')
}

const signUp = async () => {
  return baseService.postRequest('/signUp')
}

export default { signIn, signUp }