import './LoginBtn.scss';
import React from 'react';
import { switchPopup } from './LoginBtnSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSignInData, setSignIn } from '../Forms/AuthFormSlice';
import { closeBurger } from '../Burger/BurgerSlice';
import { locStorageKeys } from '../../app/constants/api';

function LoginBtn() {
  const dispatch = useAppDispatch();
  const signInData = useAppSelector(selectSignInData);
  const logIn = () => {
    dispatch(switchPopup());
    dispatch(closeBurger());
  };
  const logOut = () => {
    localStorage.removeItem(locStorageKeys.USER_DATA);
    dispatch(setSignIn({ isSignIn: false, name: '' }));
  };

  return (
    <button
      className="login-btn"
      type="button"
      aria-label="register"
      onClick={signInData.isSignIn ? logOut : logIn}
    >
      {signInData.isSignIn && <span>{signInData.name}</span>}
      <span className="login-btn__icon" />
    </button>
  );
}

export default LoginBtn;
