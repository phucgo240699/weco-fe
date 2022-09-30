import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import assetsPicker from 'assets/assetsPicker';
import { ScreenRoutes } from 'constants/index';
import PrimaryImage from 'components/PrimaryImage';
import actions from 'store/actions';
import { dispatch } from 'store';

interface Props {}

const PrimaryHeader: React.FC<Props> = () => {
  const { t } = useTranslation();

  const onPressSignOut = () => {
    dispatch(actions.authentication.signOut())
  }

  return (
    <Container>
      <Link to={ScreenRoutes.Profile}>
        <ProfileIcon src={assetsPicker.images.profileIcon} />
      </Link>
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

const ProfileIcon = styled(PrimaryImage)`
  width: 36px;
  height: 36px;
  margin-right: 1vw;
`

const SignOut = styled.button`

`

export default PrimaryHeader