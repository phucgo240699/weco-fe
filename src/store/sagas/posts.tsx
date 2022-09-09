import { call, put, takeLeading } from 'redux-saga/effects'
import apiProvider from 'services';
import actions from 'store/actions';
import { adaptHomeScreenPosts } from 'store/reducers/posts';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getHomePosts() : any {
   try {
      const response = yield call(apiProvider.posts.getAll)
      yield put(adaptHomeScreenPosts(response))
   } catch (e) {
    
   }
}

function* postsSaga() {
  yield takeLeading(actions.posts.GET_HOME_POSTS, getHomePosts)
}

export default postsSaga
