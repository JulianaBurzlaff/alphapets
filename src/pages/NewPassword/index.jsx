import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import {
  codeRequired,
  passwordRequired,
  confirmPasswordRequired,
} from '../../services/validations';

function Login() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
  });
  const history = useHistory();

  const onSubmit = async () => {
    history.push(`/login`);
  };

  return (
    <AuthTemplate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            name="code"
            control={control}
            rules={{ validate: codeRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.code}
                id="outlined-basic"
                label="Código"
                variant="outlined"
                placeholder="Digite o código recebido por e-mail"
                helperText={errors.code?.message}
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
                placeholder="Digite sua nova senha"
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
                placeholder="Digite novamente a sua nova senha"
                helperText={errors.confirmPassword?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            fullWidth="true"
          >
            Confirmar
          </Button>
        </Grid>
      </Grid>
    </AuthTemplate>
  );
}

export default Login;
