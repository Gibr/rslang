import './NavMenu.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';

function NavMenu(): JSX.Element {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li className="nav-menu__item">
          <NavLink to={AppRoutes.TEXTBOOK} className="nav-menu__link">
            Textbook
          </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink to={AppRoutes.STATISTICS} className="nav-menu__link">
            Statistics
          </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink to={AppRoutes.AUDIO_CHALLENGE} className="nav-menu__link">
            Audio-Challenge
          </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink to={AppRoutes.SPRINT} className="nav-menu__link">
            Sprint
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
