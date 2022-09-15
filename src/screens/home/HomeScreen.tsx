import React from 'react';
import actions from 'store/actions';
import styled from 'styled-components';
import useGlobalSelector from 'store/selectors';
import VerticalPostItem from 'components/VerticalPostItem';
import assetsPicker from 'assets/assetsPicker';

interface Props {}
const HomeScreen : React.FC<Props> = () => {
  const selectors = useGlobalSelector()
  const posts = selectors.posts.homePosts.data
  const isLoadingPosts = selectors.posts.homePosts.isLoading

  React.useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    actions.posts.getHomePosts()
  }

  return (
    <Container>
      <Content>
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
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const LoadingPosts = styled.img`
  width: 50%;
  margin: auto;
  background-color: #F0F2F5;
`

export default HomeScreen;