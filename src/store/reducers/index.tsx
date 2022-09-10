import { combineReducers } from 'redux'
import postsReducer from 'store/reducers/postsReducer'

const rootReducer = combineReducers({
  posts: postsReducer
})

export default rootReducer
