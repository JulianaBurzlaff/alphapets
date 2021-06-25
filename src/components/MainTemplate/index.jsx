import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUsers } from '../../Hooks/useUsers';
import Header from '../Header';
import * as S from './styles';

function MainTemplate({ children }) {
  const { user } = useUsers();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/home');
    }
  }, [user]);

  return (
    <>
      <Header />
      <S.Container>{children}</S.Container>
    </>
  );
}

export default MainTemplate;
