import React from 'react';
import styled from 'styled-components';
import { PostType } from "types/postsTypes";
import PrimaryText, { PrimaryTextType } from 'components/PrimaryText';
import PrimaryImage from 'components/PrimaryImage';

interface Props {
  post: PostType
}

const VerticalPostItem: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <Thumbnail src={post.thumbnailUrl} />
      <PrimaryText type={PrimaryTextType.PostTile}>{post.title}</PrimaryText>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const Thumbnail = styled(PrimaryImage)`
  width: 100%;
`

export default VerticalPostItem