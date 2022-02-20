import './LoginBtn.scss';
import React from 'react';
import { switchPopup } from './LoginBtnSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSignInData } from '../Forms/AuthFormSlice';
import { closeBurger } from '../Burger/BurgerSlice';

function LoginBtn() {
  const dispatch = useAppDispatch();
  const signInData = useAppSelector(selectSignInData);

  return (
    <button
      className="login-btn"
      type="button"
      aria-label="register"
      onClick={() => {
        dispatch(switchPopup());
        dispatch(closeBurger());
      }}
    >
      {signInData.isSignIn && <span>{signInData.name}</span>}
      <span className="login-btn__icon" />
    </button>
  );
}

export default LoginBtn;
