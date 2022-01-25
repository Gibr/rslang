import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import './Header.scss';

function Header(): JSX.Element {
  return (
    <header className="header">
      <NavMenu />
    </header>
  );
}

export default Header;
