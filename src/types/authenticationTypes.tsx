import { NavigateFunction } from "react-router-dom";

export type SignInRequestType = {
  email: string;
  password: string;
  navigate?: NavigateFunction;
}

export type SignUpRequestType = {
  email: string;
  name: string;
  password: string;
  navigate?: NavigateFunction;
}

export type RefreshTokenRequestType = {
  refreshToken: string;
}

export type AuthType = {
  id?: string;
  accessToken?: string;
  refreshToken?: string;
}

export type ProfileType = {
  id: string;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
}
