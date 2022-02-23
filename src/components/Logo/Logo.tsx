import './Logo.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { closeBurger } from '../Burger/BurgerSlice';
import { useAppDispatch } from '../../app/hooks';

function Logo() {
  const dispatch = useAppDispatch();

  return (
    <NavLink
      to="/"
      className="header__logo"
      onClick={() => {
        dispatch(closeBurger());
      }}
    >
      <div className="logo" />
    </NavLink>
  );
}

export default Logo;
