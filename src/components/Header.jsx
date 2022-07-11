import React from 'react';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to='/'>Logo</Link>
          <div className="header__buttons">
            <Link to="/login">
              <Button className="header__login" variant="outlined" endIcon={<LoginIcon />}>Вход</Button>
            </Link> 
            <Link to="/registration">
              <Button className="header__registration" variant="contained" endIcon={<GroupAddIcon />}>Регистрация</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;