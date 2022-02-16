import './Header.scss';

import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import LoginBtn from '../LoginBtn/LoginBtn';
import Logo from '../Logo/Logo';

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
