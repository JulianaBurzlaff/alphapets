import React, { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import MainTemplate from '../../components/MainTemplate';
import ImageUpload from '../../components/ImageUpload';
import Button from '../../components/Button';
import { usePet } from '../../Hooks/usePet';
import { useUsers } from '../../Hooks/useUsers';
import { nameRequired, typeRequired } from '../../services/validations';
import * as S from './styles';

function PetRegister() {
  const { petRegister } = usePet();
  const { user } = useUsers();
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const [image, setImage] = useState(null);

  const getBase64 = useCallback((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  }, []);

  const onFileUploaded = useCallback(
    async (file) => {
      const base64 = await getBase64(file);

      setImage(base64);
    },
    [getBase64]
  );

  const onSubmit = async ({ name, age, weight, type, race }) => {
    await petRegister({
      ownerId: user.id,
      name,
      age,
      weight,
      type,
      race,
      image,
    });
    history.push('/list');
  };

  return (
    <MainTemplate>
      <S.Container>
        <S.Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                rules={{ validate: nameRequired }}
                render={({ field }) => (
                  <TextField
                    error={!!errors.name}
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    placeholder="Digite o nome do seu pet"
                    helperText={errors.name?.message}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="Idade"
                    variant="outlined"
                    placeholder="Digite a idade do seu pet"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="weight"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="Peso"
                    variant="outlined"
                    placeholder="Digite o peso do seu pet em Kg"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="type"
                control={control}
                rules={{ validate: typeRequired }}
                render={({ field }) => (
                  <TextField
                    error={!!errors.type}
                    id="outlined-basic"
                    label="Tipo"
                    variant="outlined"
                    placeholder="Digite o tipo do seu pet. Ex: Gato, Cachorro."
                    helperText={errors.type?.message}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="race"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="Raça"
                    variant="outlined"
                    placeholder="Digite a raça do seu pet"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <ImageUpload onFileUploaded={onFileUploaded} />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleSubmit(onSubmit)} fullWidth="true">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </S.Form>
      </S.Container>
    </MainTemplate>
  );
}

export default PetRegister;
