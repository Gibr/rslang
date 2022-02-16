import './LoginBtn.scss';
import React from 'react';
import { switchPopup } from './LoginBtnSlice';
import { useAppDispatch } from '../../app/hooks';

function LoginBtn() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="login-btn"
      type="button"
      aria-label="register"
      onClick={() => {
        dispatch(switchPopup());
      }}
    >
      <span className="login-btn__icon" />
    </button>
  );
}

export default LoginBtn;
