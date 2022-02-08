import './Logo.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/">
      <div className="logo" />
    </NavLink>
  );
}

export default Logo;
