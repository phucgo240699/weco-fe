import postsReducer from './postsReducer'
import sessionReducer from './sessionReducer'
import authenticationReducer from './authenticationReducer'

const rootReducer = {
  posts: postsReducer,
  session: sessionReducer,
  authentication: authenticationReducer
}

export default rootReducer
