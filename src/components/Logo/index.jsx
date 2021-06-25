import React from 'react';
import logo from '../../assets/logo.png';
import * as S from './styles';

function Logo({ size = 'default' }) {
  const height = {
    default: '100px',
    small: '50px',
  };
  const width = {
    default: '400px',
    small: '200px',
  };
  return (
    <S.Logo
      src={logo}
      alt="Alphapets logo"
      height={height[size]}
      width={width[size]}
    />
  );
}

export default Logo;
