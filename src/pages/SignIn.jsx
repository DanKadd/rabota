import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LockOpenIcon from '@mui/icons-material/LockOpen';


import { Link } from 'react-router-dom';

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataArr = {
      email: data.get('email'),
      password: data.get('password'),
    }
    console.dir(dataArr);
  };

  return (
    <div className="registration main">
      <div className="registration__inner">
        <div className="registration__header">
          <Avatar sx={{bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar>
          <span className="registration__title">Авторизация</span>
        </div>
        <Container component="main" maxWidth="sm">
          <Box component="form" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField required fullWidth id="email" label="Email адрес" name="email" autoComplete="email"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="new-password"/>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Запомнить меня"
                  />
                </Grid>
              </Grid>
              <Button className="registration__btn" type="submit" fullWidth variant="contained">Авторизация</Button>
          </Box>
          <p className="registration__hasAccount">Нет аккаунта? <Link className='registration__hasAccount-link' to="/registration">Зарегистрируйтесь</Link> </p>
        </Container>
      </div>
    </div>
  );
}

export default SignIn;