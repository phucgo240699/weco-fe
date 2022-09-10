import React from 'react';
import { Link } from 'react-router-dom';
import { ScreenRoutes } from 'constants/index';
import actions from 'store/actions';

interface Props {}
const ProfileScreen : React.FC<Props> = () => {

  React.useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    actions.posts.getHomePosts()
  }

  return (
    <Link to={ScreenRoutes.Home}>Back to Home</Link>
  )
}

export default ProfileScreen;