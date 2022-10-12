import React from 'react';
import { dispatch } from 'store';
import styled from 'styled-components';
import { ScreenRoutes } from 'constants/index';
import { navigateTo } from 'store/reducers/sessionReducer';

interface Props {}
const ProfileScreen : React.FC<Props> = () => {
  const onPressBackToHome = () => {
    dispatch(navigateTo({ path: ScreenRoutes.Home }))
  }
  return (
    <BackButton onClick={onPressBackToHome}>Back to Home</BackButton>
  )
}

const BackButton = styled.button``

export default ProfileScreen;