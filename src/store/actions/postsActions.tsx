import { store } from "store/index";

export const GET_HOME_POSTS = 'GET_HOME_POSTS';
export const getHomePosts = () => (
  store.dispatch({
    type: GET_HOME_POSTS
  })
)

export default {
  getHomePosts,
  GET_HOME_POSTS
}
