import React, { useEffect } from 'react';
import './Burger.scss';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { switchBurger } from './BurgerSlice';
import { RootState } from '../../app/store';
import { preventPageScroll } from '../../utils/utils';

function Burger(): JSX.Element {
  const dispatch = useAppDispatch();
  const isBurgerOpened = useAppSelector(
    (state: RootState) => state.burger.isOpened
  );

  /*
   * If we dont't need to prevent scroll of page behind the overlay,
   * we can remove this useEffect
   */
  useEffect(() => {
    preventPageScroll(isBurgerOpened);
  }, [isBurgerOpened]);

  return (
    <button
      className={`burger ${isBurgerOpened && 'burger_opened'}`}
      type="button"
      aria-label="burger"
      onClick={(e) => {
        dispatch(switchBurger());
      }}
    >
      <span />
    </button>
  );
}

export default Burger;
