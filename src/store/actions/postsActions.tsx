import { store } from "store/index";

const GET_HOME_POSTS = 'GET_HOME_POSTS';
const getHomePosts = () => (
  store.dispatch({
    type: GET_HOME_POSTS
  })
)

const postsActions = {
  getHomePosts,
  GET_HOME_POSTS
}

export default postsActions;
