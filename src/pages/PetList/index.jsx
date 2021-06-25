import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainTemplate from '../../components/MainTemplate';
import Button from '../../components/Button';
import PetCard from '../../components/PetCard';
import { usePet } from '../../Hooks/usePet';
import { useUsers } from '../../Hooks/useUsers';
import * as S from './styles';

function PetList() {
  const history = useHistory();
  const { pets, fetchPets } = usePet();
  const { user } = useUsers();

  const onPetRegisterClick = () => {
    history.push(`/petregister`);
  };
  // consultar pets cadastrados. Se já tem algum:
  useEffect(() => {
    if (user) {
      fetchPets(user.id);
    }
  }, []);

  return (
    <>
      <MainTemplate>
        <S.Container>
          {pets && pets.length > 0 ? (
            <S.Pets>
              {pets.map((pet) => (
                <PetCard pet={pet} key={pet.id} />
              ))}
            </S.Pets>
          ) : (
            <S.Phrase>Não há pets cadastrados.</S.Phrase>
          )}
          <Button onClick={onPetRegisterClick}>+ Cadastrar pet</Button>
        </S.Container>
      </MainTemplate>
    </>
  );
}

export default PetList;
