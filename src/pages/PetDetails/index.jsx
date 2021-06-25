import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MainTemplate from '../../components/MainTemplate';
import Button from '../../components/Button';
import { usePet } from '../../Hooks/usePet';
import { useAppointment } from '../../Hooks/useAppointment';
import PetDetail from '../../components/PetDetail';
import AppointmentsTable from '../../components/AppointmentsTable';
import * as S from './styles';

function PetDetails() {
  const { id } = useParams();
  const { pets } = usePet();
  const { appointments, fetchAppointments } = useAppointment();
  const history = useHistory();

  const onCreateAppointmentClick = () => {
    history.push(`/createappointment`);
  };

  useEffect(() => {
    if (appointments) {
      fetchAppointments(id);
    }
  }, []);

  const detailedPet = pets.filter((pet) => pet.id === Number(id));
  const petAppointments = appointments.filter(
    (appointment) => appointment.petId === Number(id)
  );

  return (
    <>
      <MainTemplate>
        <PetDetail pet={detailedPet[0]} />
        <S.Container>
          {petAppointments.length > 0 ? (
            <AppointmentsTable />
          ) : (
            <S.Phrase>Não há agendamentos para esse pet.</S.Phrase>
          )}
          <Button onClick={onCreateAppointmentClick}>+ Novo Agendamento</Button>
        </S.Container>
      </MainTemplate>
    </>
  );
}

export default PetDetails;
