import React from 'react';
import { Link } from 'react-router-dom';
import { ScreenRoutes } from 'constants/index';

interface Props {}
const ProfileScreen : React.FC<Props> = () => {
  return (
    <Link to={ScreenRoutes.Home}>Back to Home</Link>
  )
}

export default ProfileScreen;