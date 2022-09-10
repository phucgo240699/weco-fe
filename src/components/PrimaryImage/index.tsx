import React from 'react';

interface Props {
  src: any;
  style?: any;
}

const PrimaryImage: React.FC<Props> = ({src, style, ...otherProps}) => {
  return (
    <img src={src} style={{ ...style, borderRadius: 10 }} {...otherProps} />
  )
}

export default PrimaryImage