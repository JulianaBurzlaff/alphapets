import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import { emailRequired } from '../../services/validations';

function Password() {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
  });
  const history = useHistory();

  const onRecoverPasswordClick = (event) => {
    event.preventDefault();
    history.push(`/newpassword`);
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
          <Button
            disabled={isSubmitting}
            onClick={onRecoverPasswordClick}
            fullWidth="true"
          >
            Recuperar senha
          </Button>
        </Grid>
      </Grid>
    </AuthTemplate>
  );
}

export default Password;
