import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import sessionReducer from './sessionReducer'
import authenticationReducer from './authentication'

const rootReducer = combineReducers({
  posts: postsReducer,
  session: sessionReducer,
  authentication: authenticationReducer
})

export default rootReducer
