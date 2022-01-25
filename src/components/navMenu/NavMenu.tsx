import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';

function NavMenu(): JSX.Element {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li className="nav-menu__item">
          <NavLink to="/" className="nav-menu__link">
            Main
          </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink to="/authorization" className="nav-menu__link">
            Authorization
          </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink to="/textbook" className="nav-menu__link">
            Textbook
          </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink to="/statistics" className="nav-menu__link">
            Statistics
          </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink to="/games" className="nav-menu__link">
            Games
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
