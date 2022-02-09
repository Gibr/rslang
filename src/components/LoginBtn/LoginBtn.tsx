import './LoginBtn.scss';

import React from 'react';
import { useDispatch } from 'react-redux';
import { switchPopup } from './LoginBtnSlice';

function LoginBtn() {
  const dispatch = useDispatch();

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
