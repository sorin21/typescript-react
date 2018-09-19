import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.scss';

const Header = () => {
  return (
    <header>
      <h1>Welcome to Jokes</h1>
      <NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>
      <NavLink to="/add" activeClassName={classes.active}>Add Joke</NavLink>
      <NavLink to="/edit" activeClassName={classes.active}>Edit Joke</NavLink>
    </header>
  );
};

export default Header;