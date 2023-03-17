 import React from 'react';
 import { dispatch } from 'store';
 import actions from 'store/actions';
import styled from 'styled-components';
import { PageRoutes } from 'constants/index';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, MenuProps } from 'antd';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import { navigate } from 'navigation';

interface Props {}

const PrimaryHeader: React.FC<Props> = () => {
  const { t } = useTranslation();
  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <div>{t('profile.myProfile')}</div>
      ),
      onClick() {
        onPressMyProfile()
      }
    },
    {
      key: '1',
      label: (
        <Button danger type='text'>{t('authentication.signOut.signOut')}</Button>
      ),
      onClick() {
        onPressSignOut()
      }
    }
  ]

  const onPressSignOut = () => {
    dispatch(actions.authentication.signOut())
  }

  const onPressMyProfile = () => {
    navigate(PageRoutes.Profile)
  }

  return (
    <Container>
      <Dropdown menu={{ items }} placement='bottomLeft'>
        <Button type='primary' icon={<MenuOutlined />} />
      </Dropdown>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`

export default PrimaryHeader