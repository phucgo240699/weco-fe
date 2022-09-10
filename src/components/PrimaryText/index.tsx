import React from 'react';
import styled from 'styled-components';

export enum PrimaryTextType {
  PostTile = 'PostTitle',
  PostContent = 'PostContent'
}

interface Props {
  children: any;
  type?: PrimaryTextType;
}

const PrimaryText: React.FC<Props> = ({
  children,
  type
}) => {
  const renderCompatibleText = () => {
    switch (type) {
      case PrimaryTextType.PostTile:
        return <PostTitle>{children}</PostTitle>
    
      case PrimaryTextType.PostContent:
        return <PostContent>{children}</PostContent>
      
      default:
        return <p>{children}</p>
    }
  }
  return (
    <>
      {
        renderCompatibleText()
      }
    </>
  )
}

const PostTitle = styled.p`
  font-family: TiroBangla;
  font-weight: 700;
  font-size: 1.5rem;
`

const PostContent = styled.p`
  font-family: Lato;
  font-weight: 400;
  font-size: 1rem;
`

export default PrimaryText