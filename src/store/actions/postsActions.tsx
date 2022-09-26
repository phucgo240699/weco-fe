const GET_HOME_POSTS = 'GET_HOME_POSTS';
const getHomePosts = () => {
  return {
    type: GET_HOME_POSTS
  }
}

const postsActions = {
  getHomePosts,
  GET_HOME_POSTS
}

export default postsActions;
