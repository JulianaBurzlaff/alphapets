import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useUsers } from '../../Hooks/useUsers';
import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import {
  emailRequired,
  passwordRequired,
  nameRequired,
  confirmPasswordRequired,
} from '../../services/validations';

function UserRegister() {
  const { register } = useUsers();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const history = useHistory();

  const onSubmit = ({ name, email, password }) => {
    register({ name, email, password });
  };

  const onLoginClick = (event) => {
    event.preventDefault();
    history.push(`/login`);
  };
  return (
    <AuthTemplate>
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
                placeholder="Digite seu nome"
                helperText={errors.name?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            rules={{ validate: emailRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.email}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                placeholder="Digite seu e-mail"
                helperText={errors.email?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="password"
            control={control}
            rules={{ validate: passwordRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.password}
                type="password"
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                placeholder="Digite sua senha"
                helperText={errors.password?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              validate: (value) =>
                confirmPasswordRequired(value, watch('password')),
            }}
            render={({ field }) => (
              <TextField
                error={!!errors.confirmPassword}
                type="password"
                id="outlined-basic"
                label="Confirmar Senha"
                variant="outlined"
                placeholder="Digite novamente sua senha"
                helperText={errors.confirmPassword?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleSubmit(onSubmit)} fullWidth="true">
            Cadastrar
          </Button>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Link href="/login" onClick={onLoginClick}>
            Já tenho cadastro
          </Link>
        </Grid>
      </Grid>
    </AuthTemplate>
  );
}

export default UserRegister;
