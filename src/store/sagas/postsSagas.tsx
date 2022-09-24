import apiProvider from 'services';
import actions from 'store/actions';
import { push } from 'react-router-redux';
import { call, put, takeLatest } from 'redux-saga/effects'
import { adaptHomeScreenPosts, closeLoadingHomePosts, showLoadingHomePosts } from 'store/reducers/postsReducer';
import { ScreenRoutes } from 'constants/index';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getHomePosts() : any {
   try {
      yield(put(showLoadingHomePosts()))
      const response = yield call(apiProvider.posts.getAll)
      yield put(adaptHomeScreenPosts(response))
      yield put(push(ScreenRoutes.Home))
   } catch (e) {
      
   } finally {
      yield(put(closeLoadingHomePosts()))
   }
}

function* postsSaga() {
  yield takeLatest(actions.posts.GET_HOME_POSTS, getHomePosts)
}

export default postsSaga
