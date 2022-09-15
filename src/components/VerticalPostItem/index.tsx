import React from 'react';
import './index.css';
import styled from 'styled-components';
import { PostType } from "types/postsTypes";
import PrimaryImage from 'components/PrimaryImage';

interface Props {
  post: PostType
}

const VerticalPostItem: React.FC<Props> = ({ post }) => {
  return (
    <Container href='https://www.thegioididong.com'>
      <Thumbnail src={post.thumbnailUrl} />
      <Title>{post.title}</Title>
    </Container>
  )
}

const Container = styled.a`
  display: flex;
  margin-top: 4vh;
  border-radius: 1vh;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`

const Thumbnail = styled(PrimaryImage)`
  width: 100%;
  border-width: 1px;
  background-color: #ffffff;
  border-top-left-radius: 1vh;
  border-top-right-radius: 1vh;
`

const Title = styled.p`
  margin: 20px;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: TiroBangla;
`

export default VerticalPostItem