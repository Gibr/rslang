import React from 'react';
import './Burger.scss';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { switchBurger } from './BurgerSlice';
import { RootState } from '../../app/store';

function Burger(): JSX.Element {
  const dispatch = useAppDispatch();
  const isBurgerOpened = useAppSelector(
    (state: RootState) => state.Burger.isOpened
  );

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
