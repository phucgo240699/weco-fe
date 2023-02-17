export const BASE_URL = process.env.REACT_APP_BASE_URL;

export enum PageRoutes {
  Home = '/',
  Profile = '/profile',
  SignIn = '/signIn',
  SignUp = '/signUp'
}

export enum HttpStatusCode {
  Success = 200,
  NotAcceptable = 406,
  ExpiredAccessToken = 401,
  ExpiredRefreshToken = 403,
  InternalServerError= 500
}

export const colors = {
  Malibu: {
    Hex: function(alpha: number = 1) {
      return `#61baff${alpha * 100}`
    },
    Rgb: function(alpha: number = 1) {
      return `rgba(97,186,255,${alpha})`
    }
  },
  Anakiwa: {
    Hex: function(alpha: number = 1) {
      return `#a6effd${alpha * 100}`
    },
    Rgb: function(alpha: number = 1) {
      return `rgba(166,239,253,${alpha})`
    }
  }
}