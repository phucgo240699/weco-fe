import React from 'react';
import actions from 'store/actions';
import styled from 'styled-components';
import useGlobalSelector from 'store/selectors';
import VerticalPostItem from 'components/VerticalPostItem';

interface Props {}
const HomeScreen : React.FC<Props> = () => {
  const selectors = useGlobalSelector()
  const posts = selectors.posts.homePosts

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
          posts && posts.length > 0 && posts.map((post, index) => {
            return <VerticalPostItem key={index} post={post}></VerticalPostItem>
          })
        }
      </Content>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Content = styled.div`
  width: 90vw;
  display: flex;
  max-width: 700px;
  margin-top: 40px;
  flex-direction: column;
`

export default HomeScreen;