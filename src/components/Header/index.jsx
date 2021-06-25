import React from 'react';
import Logo from '../Logo';
import LongMenu from '../LongMenu';
import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <Logo size="small" />
      <LongMenu />
    </S.Header>
  );
}

export default Header;
