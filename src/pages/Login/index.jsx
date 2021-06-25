import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import { emailRequired, passwordRequired } from '../../services/validations';
import { useUsers } from '../../Hooks/useUsers';

function Login() {
  const { login } = useUsers();
  const [error, setError] = useState();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
  });
  const history = useHistory();

  const onSubmit = async (data) => {
    setError();
    const user = await login(data);

    if (!user) {
      setError('E-mail ou senha inválidos');
    }
  };

  const onRegisterClick = (event) => {
    event.preventDefault();
    history.push(`/register`);
  };
  const onPasswordClick = (event) => {
    event.preventDefault();
    history.push(`/password`);
  };

  return (
    <AuthTemplate>
      <Grid container spacing={3}>
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
          <Button
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            fullWidth="true"
          >
            Entrar
          </Button>
        </Grid>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
        <Grid container item xs={12} justify="space-between">
          <Link href="/password" onClick={onPasswordClick}>
            Esqueci a senha
          </Link>
          <Link href="/register" onClick={onRegisterClick}>
            Novo Cadastro
          </Link>
        </Grid>
      </Grid>
    </AuthTemplate>
  );
}

export default Login;
