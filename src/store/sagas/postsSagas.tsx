import _ from 'lodash';
import apiProvider from 'services';
import actions from 'store/actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { adaptHomeScreenPosts, closeLoadingHomePosts, showLoadingHomePosts } from 'store/reducers/postsReducer';

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
