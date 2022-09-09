import { combineReducers } from 'redux'
import postsReducer from 'store/reducers/posts'

const rootReducer = combineReducers({
  posts: postsReducer
})

export default rootReducer
