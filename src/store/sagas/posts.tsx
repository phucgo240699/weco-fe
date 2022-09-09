import { call, put, takeLatest } from 'redux-saga/effects'
import apiProvider from 'services';
import actions from 'store/actions';
import { adaptHomeScreenPosts } from 'store/reducers/posts';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getHomePosts() : any {
   try {
      console.log('getHomePosts')
      const response = yield call(apiProvider.posts.getAll)
      console.log(response)
      yield put(adaptHomeScreenPosts(response))
   } catch (e) {
    
   }
}

function* postsSaga() {
  yield takeLatest(actions.posts.GET_HOME_POSTS, getHomePosts)
}

export default postsSaga
