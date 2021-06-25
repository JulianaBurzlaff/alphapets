import React from 'react';
import { useHistory } from 'react-router-dom';
import MainTemplate from '../../components/MainTemplate';
import Button from '../../components/Button';
import AppointmentsTable from '../../components/AppointmentsTable';
import * as S from './styles';

function Appointments() {
  // const { pet_id } = useParams();
  const history = useHistory();

  // const [pet, setPet] = useState({});

  const onCreateAppointmentClick = () => {
    history.push(`/createappointment`);
  };

  // if (pet_id) {
  //   // consultar banco de dados pelo pet_id
  //   // const data = await response.json();
  //   setPet(data);
  // consultar agendamentos cadastrados. Se já tem algum:
  return (
    <>
      <MainTemplate>
        <S.Container>
          <AppointmentsTable />
          <Button onClick={onCreateAppointmentClick}>+ Novo Agendamento</Button>
        </S.Container>
      </MainTemplate>
    </>
  );

  // se nao tem agendamento
  // return (
  //   <>
  //     <MainTemplate>
  //       <PetDetail pet={pet} />
  //       <S.Container>
  //         <S.Phrase>Não há serviços agendados .</S.Phrase>
  //         <Button onClick={onCreateAppointmentClick}>+ Novo Agendamento</Button>
  //       </S.Container>
  //     </MainTemplate>
  //   </>
  // );
  // }
}

export default Appointments;
