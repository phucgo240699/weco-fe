import React from 'react';

interface Props {
  src: any;
  style?: any;
}

const PrimaryImage: React.FC<Props> = ({src, style, ...otherProps}) => {
  return (
    <img src={src} style={style} {...otherProps} />
  )
}

export default PrimaryImage