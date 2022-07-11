import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';


function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataArr = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
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
              <LockOutlinedIcon />
            </Avatar>
            <span className="registration__title">Регистрация</span>
        </div>
        <Container component="main" maxWidth="sm">
          <Box component="form" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="Ваше имя" autoFocus/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required fullWidth id="lastName" label="Ваша фамилия" name="lastName" autoComplete="family-name"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="email" label="Email адрес" name="email" autoComplete="email"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="new-password"/>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Я соглашаюсь на обработку персональных данных"
                  />
                </Grid>
              </Grid>
              <Button className="registration__btn" type="submit" fullWidth variant="contained">Регистрация</Button>
          </Box>
          <p className="registration__hasAccount">Есть аккаунт? <Link className='registration__hasAccount-link' to="/login">Войдите</Link> </p>
        </Container>
      </div>
    </div>
  );
}

export default SignUp;