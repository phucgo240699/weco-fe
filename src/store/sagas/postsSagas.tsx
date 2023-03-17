import _ from 'lodash';
import apiProvider from 'services';
import actions from 'store/actions';
import { push } from 'react-router-redux';
import { put, takeLatest, call } from 'redux-saga/effects'
import { adaptHomeScreenPosts, closeLoadingHomePosts, showLoadingHomePosts } from 'store/reducers/postsReducer';
import { PageRoutes } from 'constants/index';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getHomePosts() : any {
   try {
      yield(put(showLoadingHomePosts()))
      const { data } = yield call(apiProvider.posts.getAll, {})
      if (_.isNil(data)) return;
      yield put(adaptHomeScreenPosts(data))
   } catch (e) {
      _.noop()
   } finally {
      yield(put(closeLoadingHomePosts()))
   }
}

function* postsSaga() {
  yield takeLatest(actions.posts.GET_HOME_POSTS, getHomePosts)
}

export default postsSaga
