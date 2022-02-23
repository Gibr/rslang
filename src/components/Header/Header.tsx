import './Header.scss';

import React, { useEffect } from 'react';
import LoginBtn from '../LoginBtn/LoginBtn';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import Burger from '../Burger/Burger';
import { setCssVar, getNodeHeight } from '../../utils/utils';
import { HeaderData } from '../../app/constants/global';

const setHeaderVariable = (): void => {
  setCssVar(HeaderData.variable, `${getNodeHeight(HeaderData.selector)}px`);
};

window.addEventListener('resize', setHeaderVariable);

function Header(): JSX.Element {
  useEffect(() => {
    setHeaderVariable();
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
