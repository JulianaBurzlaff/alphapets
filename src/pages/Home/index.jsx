import React from 'react';
import { useHistory } from 'react-router-dom';
import pets from '../../assets/pets.png';
import Logo from '../../components/Logo';
import * as S from './styles';

function Home() {
  const history = useHistory();

  const onLoginClick = () => {
    history.push(`/login`);
  };

  const onRegisterClick = () => {
    history.push(`/register`);
  };

  return (
    <>
      <S.Container>
        <S.Info>
          <Logo />
          <S.Phrase>A agenda online dos seus pets.</S.Phrase>
          <S.Buttons>
            <S.StyledButton color="secondary" onClick={onLoginClick}>
              Entrar
            </S.StyledButton>
            <S.StyledButton onClick={onRegisterClick}>Cadastrar</S.StyledButton>
          </S.Buttons>
        </S.Info>
        <S.Image src={pets} alt="Pets" />
      </S.Container>
    </>
  );
}

export default Home;
