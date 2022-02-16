import './NavMenu.scss';

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import { useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  selectCurrentUnitPage,
} from '../TextbookNav/textbookNavSlice';

function NavMenu(): JSX.Element {
  const location = useLocation();

  const currentPage =
    location.pathname.split('/').slice(1, Infinity)[0] || 'main-screen';

  const currentUnit = useAppSelector(selectCurrentUnit);
  const currentUnitPage = useAppSelector(selectCurrentUnitPage);

  let navList: JSX.Element;

  switch (currentPage) {
    case 'textbook':
      navList = (
        <ul className="nav-menu__list">
          <li className="nav-menu__item">
            <NavLink
              to={`${AppRoutes.TEXTBOOK}/unit-${currentUnit}/${currentUnitPage}`}
              className="nav-menu__link"
            >
              Textbook
            </NavLink>
          </li>
          <li className="nav-menu__item">
            <NavLink to={AppRoutes.STATISTICS} className="nav-menu__link">
              Statistics
            </NavLink>
          </li>{' '}
        </ul>
      );
      break;

    default:
      navList = (
        <ul className="nav-menu__list">
          <li className="nav-menu__item">
            <NavLink
              to={`${AppRoutes.TEXTBOOK}/unit-${currentUnit}/${currentUnitPage}`}
              className="nav-menu__link"
            >
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
      );
  }

  return <nav className="nav-menu">{navList}</nav>;
}

export default NavMenu;
