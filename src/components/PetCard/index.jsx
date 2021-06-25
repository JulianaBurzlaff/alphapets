import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function PetCard({ pet }) {
  const { name, image } = pet;
  const history = useHistory();

  function navigateToPetDetails(id) {
    history.push(`/details/${id}`);
  }

  return (
    <S.Container onClick={() => navigateToPetDetails(pet.id)}>
      <S.Image src={image} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}

export default PetCard;
