 import React from 'react';
 import { dispatch } from 'store';
 import actions from 'store/actions';
import styled from 'styled-components';
import assetsPicker from 'assets/assetsPicker';
import { ScreenRoutes } from 'constants/index';
import { useTranslation } from 'react-i18next';
import PrimaryImage from 'components/PrimaryImage';
import { navigateTo } from 'store/reducers/sessionReducer';

interface Props {}

const PrimaryHeader: React.FC<Props> = () => {
  const { t } = useTranslation();

  const onPressSignOut = () => {
    dispatch(actions.authentication.signOut())
  }

  const onPressProfileIcon = () => {
    dispatch(navigateTo({ path: ScreenRoutes.Profile }))
  }

  return (
    <Container>
      <ProfileButton onClick={onPressProfileIcon}>
        <ProfileIcon src={assetsPicker.images.profileIcon} />
      </ProfileButton>
      <SignOut onClick={onPressSignOut}>{t('authentication.signOut.signOut')}</SignOut>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: #246EF6;
`

const ProfileButton = styled.button``

const ProfileIcon = styled(PrimaryImage)`
  width: 36px;
  height: 36px;
  margin-right: 1vw;
`

const SignOut = styled.button`

`

export default PrimaryHeader