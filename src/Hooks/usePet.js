import { useContext } from 'react';
import { PetContext } from '../providers/PetProvider';

export function usePet() {
  const context = useContext(PetContext);

  return context;
}
