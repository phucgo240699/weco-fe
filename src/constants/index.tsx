export const BASE_URL = process.env.REACT_APP_BASE_URL;

export enum ScreenRoutes {
  Home = '/',
  Profile = '/profile',
  SignIn = '/signIn'
}

export enum HttpStatusCode {
  Success = 200,
  NotAcceptable = 406,
  ExpiredAccessToken = 401,
  ExpiredRefreshToken = 403,
  InternalServerError= 500
}
