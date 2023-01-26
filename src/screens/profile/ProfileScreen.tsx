import React from 'react';
import styled from 'styled-components';
import { ScreenRoutes } from 'constants/index';
import { useNavigate } from 'react-router-dom';

interface Props {}
const ProfileScreen : React.FC<Props> = () => {
  const navigate = useNavigate();
  const onPressBackToHome = () => {
    navigate(ScreenRoutes.Home)
  }
  return (
    <BackButton onClick={onPressBackToHome}>Back to Home</BackButton>
  )
}

const BackButton = styled.button``

export default ProfileScreen;