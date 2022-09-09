import React from 'react';
import styled from 'styled-components';
import { Post } from "types/posts";

interface Props {
  post: Post
}

const VerticalPostItem: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <Thumbnail src={post.thumbnailUrl} />
      <Title>{post.title}</Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const Thumbnail = styled.img`
  width: 100%;
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`

export default VerticalPostItem