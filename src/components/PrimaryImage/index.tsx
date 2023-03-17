import i18n from 'locales';
import React from 'react';

interface Props {
  src: any;
  style?: any;
}

const PrimaryImage: React.FC<Props> = ({src, style, ...otherProps}) => {
  return (
    <img alt={i18n.t('session.loading').toString()} src={src} style={style} {...otherProps} />
  )
}

export default PrimaryImage