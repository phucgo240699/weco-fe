import React from 'react';
import { Button } from 'antd';
import { dispatch } from 'store';
import actions from 'store/actions';
import styled from 'styled-components';
import useRootSelector from 'store/selectors';
import assetsPicker from 'assets/assetsPicker';
import VerticalPostItem from 'components/VerticalPostItem';
import RedoOutlinedIcon from '@ant-design/icons/RedoOutlined';

interface Props {}
const HomeScreen : React.FC<Props> = () => {
  const selectors = useRootSelector()
  const posts = selectors.posts.homePosts.data
  const isLoadingPosts = selectors.posts.homePosts.isLoading

  React.useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    dispatch(actions.posts.getHomePosts())
  }

  return (
    <Container>
      <Content>
        <Button style={{ alignSelf: 'flex-end' }} disabled={isLoadingPosts} onClick={fetchPosts} icon={<RedoOutlinedIcon />} />
        {
          isLoadingPosts && <LoadingPosts src={assetsPicker.images.loading} />
        }
        {
          !isLoadingPosts && posts && posts.length > 0 && posts.map((post, index) => {
            return <VerticalPostItem key={index} post={post}></VerticalPostItem>
          })
        }
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 90vw;
  margin: auto;
  display: flex;
  max-width: 700px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const LoadingPosts = styled.img`
  width: 30%;
  margin: auto;
`

export default HomeScreen;