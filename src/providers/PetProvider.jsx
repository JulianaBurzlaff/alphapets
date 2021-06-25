import React, { createContext, useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import { api } from '../services/api';

export const PetContext = createContext({});

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const petRegister = useCallback(
    async ({ ownerId, name, age, weigth, type, race, image }) => {
      try {
        const { data } = await api.post('/pets', {
          ownerId,
          name,
          age,
          weigth,
          type,
          race,
          image,
        });
        setPets((prev) => [data, ...prev]);
        enqueueSnackbar('Pet cadastrado com sucesso!', {
          variant: 'success',
        });
      } catch (error) {
        //
      }
    },
    []
  );

  const fetchPets = useCallback(async (ownerId) => {
    try {
      const { data } = await api.get(`/pets?ownerId=${ownerId}`);
      setPets(data);
      return data;
    } catch (error) {
      return null;
    }
  }, []);

  return (
    <PetContext.Provider
      value={{
        pets,
        fetchPets,
        petRegister,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
