export type SignInRequestType = {
  email: string;
  password: string;
}

export type AuthContextType = {
  id: string;
  accessToken: string;
  refreshToken: string;
}

export type ProfileType = {
  id: string;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
}
