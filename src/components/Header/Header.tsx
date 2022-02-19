import './Header.scss';

import React, { useEffect } from 'react';
import LoginBtn from '../LoginBtn/LoginBtn';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import Burger from '../Burger/Burger';

const getNodeHeight = (selector: string): number => {
  const node = document.querySelector(selector);
  return node?.clientHeight || 0;
};

const setCssVar = (name: string, value: string): void => {
  document.documentElement.style.setProperty(name, value);
};

function Header(): JSX.Element {
  useEffect(() => {
    setCssVar('--header-height', `${getNodeHeight('.header')}px`);
  }, []);

  return (
    <header className="header">
      <div className="container header__container">
        <Burger />
        <Logo />
        <NavMenu />
        <LoginBtn />
      </div>
    </header>
  );
}

export default Header;
