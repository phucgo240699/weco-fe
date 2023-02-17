import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { PageRoutes } from 'constants/index';
import { useNavigate } from 'react-router-dom';
import ArrowLeftOutlinedIcon from '@ant-design/icons/ArrowLeftOutlined';

interface Props {}
const ProfilePage : React.FC<Props> = () => {
  const navigate = useNavigate();
  const onPressBackToHome = () => {
    navigate(PageRoutes.Home)
  }
  return (
    <Button type='primary' icon={<ArrowLeftOutlinedIcon />} onClick={onPressBackToHome}>Back to Home</Button>
  )
}

const BackButton = styled.button``

export default ProfilePage;