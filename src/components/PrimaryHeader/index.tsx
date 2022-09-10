import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PrimaryImage from 'components/PrimaryImage';
import assetsPicker from 'assets/assetsPicker';
import { ScreenRoutes } from 'constants/index';

interface Props {}

const PrimaryHeader: React.FC<Props> = () => {
  return (
    <Container>
      <Link to={ScreenRoutes.Profile}>
        <ProfileIcon src={assetsPicker.images.profileIcon} />
      </Link>
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

export default PrimaryHeader