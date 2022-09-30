import React from 'react';
import _ from 'lodash';
import actions from 'store/actions';
import styled from 'styled-components';
import useGlobalSelector from 'store/selectors';
import VerticalPostItem from 'components/VerticalPostItem';
import assetsPicker from 'assets/assetsPicker';
import { dispatch } from 'store';

interface Props {}
const HomeScreen : React.FC<Props> = () => {
  const selectors = useGlobalSelector()
  const posts = selectors.posts.homePosts.data
  const isLoadingPosts = selectors.posts.homePosts.isLoading

  React.useEffect(() => {
    if (_.isEmpty(posts)) {
      fetchPosts()
    }
  }, [posts])

  const fetchPosts = () => {
    dispatch(actions.posts.getHomePosts())
  }

  return (
    <Container>
      <Content>
        <RefreshButton disabled={isLoadingPosts} onClick={fetchPosts}>Refresh</RefreshButton>
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

const RefreshButton = styled.button`
  width: 100px;
  display: flex;
  margin-top: 20px;
  align-self: flex-end;
  justify-content: center;
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