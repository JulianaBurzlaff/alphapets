import React from 'react';
import * as S from './styles';

function PetDetail({ pet = {} }) {
  const { name, age, weight, type, race, image } = pet;

  return (
    <S.Container>
      <S.Image src={image} />
      <S.Infos>
        <S.Name>{name}</S.Name>
        <S.Data>
          <S.Data1>
            <p>
              <S.Bold>Idade:</S.Bold> {age}
            </p>
            <p>
              <S.Bold>Peso:</S.Bold> {weight} Kg
            </p>
          </S.Data1>
          <S.Data2>
            <p>
              <S.Bold>Tipo:</S.Bold> {type}
            </p>
            <p>
              <S.Bold>Raça:</S.Bold>
              {race}
            </p>
          </S.Data2>
        </S.Data>
      </S.Infos>
    </S.Container>
  );
}

export default PetDetail;
