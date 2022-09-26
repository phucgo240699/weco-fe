import authentication from './subServices/authenticationServices'
import posts from './subServices/postsServices'

const apiProvider = {
  authentication,
  posts
}

export default apiProvider