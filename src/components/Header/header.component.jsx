import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from './../../assets/logo.png';

const Header = () => (
    <AppBar position='sticky'>
        <Toolbar>
            <img src={logo} alt='logo' width='32' height='32'/>
            &nbsp; &nbsp;
            <h1>Kitsu Anime</h1>
        </Toolbar>
    </AppBar>
);

export default Header;
