import './Header.scss';

import React from 'react';
import LoginBtn from '../LoginBtn/LoginBtn';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <NavMenu />
        <LoginBtn />
      </div>
    </header>
  );
}

export default Header;
