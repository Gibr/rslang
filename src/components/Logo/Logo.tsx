import './Logo.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className="header__logo">
      <div className="logo" />
    </NavLink>
  );
}

export default Logo;
