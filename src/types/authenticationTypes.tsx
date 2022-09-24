export type SignInRequestType = {
  email: string;
  password: string;
}

export type ProfileType = {
  id: string;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
}
