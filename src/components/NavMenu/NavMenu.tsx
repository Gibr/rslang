import './NavMenu.scss';

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  selectCurrentUnitPage,
} from '../TextbookNav/textbookNavSlice';
import { saveURL } from './NavMenuSlice';

function NavMenu(): JSX.Element {
  const currentUnit = useAppSelector(selectCurrentUnit);
  const currentUnitPage = useAppSelector(selectCurrentUnitPage);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const saveCurrentURL = () => dispatch(saveURL(pathname));

  return (
    <nav className="nav-menu">
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
          <NavLink
            to={AppRoutes.AUDIO_CHALLENGE}
            className="nav-menu__link"
            onClick={saveCurrentURL}
          >
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
