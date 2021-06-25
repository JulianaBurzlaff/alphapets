import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import MainTemplate from '../../components/MainTemplate';
import Button from '../../components/Button';
import { usePet } from '../../Hooks/usePet';
import { useUsers } from '../../Hooks/useUsers';
import { useAppointment } from '../../Hooks/useAppointment';
import {
  nameRequired,
  serviceRequired,
  dateRequired,
  timeRequired,
} from '../../services/validations';
import * as S from './styles';

function CreateAppointment() {
  const { pets } = usePet();
  const { user } = useUsers();
  const { createAppointment } = useAppointment();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const history = useHistory();

  const onSubmit = async ({ petId, service, date, time }) => {
    const pet = pets.filter((p) => p.id === petId)[0];

    await createAppointment({
      ownerId: user.id,
      name: pet.name,
      petId,
      service,
      date,
      time,
    });

    history.push(`/appointments`);
  };

  return (
    <MainTemplate>
      <S.Container>
        <S.Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="petId"
                control={control}
                rules={{ validate: nameRequired }}
                render={({ field }) => (
                  <TextField
                    select
                    error={!!errors.name}
                    id="outlined-basic"
                    label="Nome do pet"
                    variant="outlined"
                    helperText={errors.name?.message}
                    fullWidth
                    {...field}
                  >
                    {pets.map((pet) => (
                      <MenuItem key={pet.id} value={pet.id}>
                        {pet.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="service"
                control={control}
                rules={{ validate: serviceRequired }}
                render={({ field }) => (
                  <TextField
                    error={!!errors.service}
                    id="outlined-basic"
                    label="Serviço"
                    variant="outlined"
                    placeholder="Digite o serviço a ser agendado"
                    fullWidth
                    helperText={errors.service?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="date"
                control={control}
                rules={{ validate: dateRequired }}
                render={({ field }) => (
                  <TextField
                    error={!!errors.date}
                    type="date"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    helperText={errors.date?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="time"
                control={control}
                rules={{ validate: timeRequired }}
                render={({ field }) => (
                  <TextField
                    error={!!errors.time}
                    type="time"
                    id="outlined-basic"
                    variant="outlined"
                    helperText={errors.time?.message}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleSubmit(onSubmit)} fullWidth="true">
                Confirmar agendamento
              </Button>
            </Grid>
          </Grid>
        </S.Form>
      </S.Container>
    </MainTemplate>
  );
}

export default CreateAppointment;
