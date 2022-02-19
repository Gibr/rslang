import './NavMenu.scss';

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import { useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  selectCurrentUnitPage,
} from '../TextbookNav/textbookNavSlice';
import { RootState } from '../../app/store';

function NavMenu(): JSX.Element {
  const currentUnit = useAppSelector(selectCurrentUnit);
  const currentUnitPage = useAppSelector(selectCurrentUnitPage);
  const isBurgerOpened = useAppSelector(
    (state: RootState) => state.Burger.isOpened
  );

  useEffect(() => {
    const bodyClassList = document.body.classList;

    if (isBurgerOpened) {
      bodyClassList.add('overflow-hidden');
    } else {
      bodyClassList.remove('overflow-hidden');
    }
  }, [isBurgerOpened]);

  return (
    <nav
      className={`nav-menu ${isBurgerOpened && 'nav-menu_opened'}`}
    >
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
    </nav>
  );
}

export default NavMenu;
