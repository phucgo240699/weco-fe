import { call, put, takeEvery, takeLeading } from 'redux-saga/effects'
import apiProvider from 'services';
import actions from 'store/actions';
import { adaptHomeScreenPosts, closeLoadingHomePosts, showLoadingHomePosts } from 'store/reducers/postsReducer';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getHomePosts() : any {
   try {
      yield(put(showLoadingHomePosts()))
      const response = yield call(apiProvider.posts.getAll)
      yield put(adaptHomeScreenPosts(response))
   } catch (e) {
      
   } finally {
      yield(put(closeLoadingHomePosts()))
   }
}

function* postsSaga() {
  yield takeEvery(actions.posts.GET_HOME_POSTS, getHomePosts)
}

export default postsSaga
