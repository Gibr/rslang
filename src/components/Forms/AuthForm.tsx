import React, { useState } from 'react';
import './Form.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import Input from '../Input/Input';
import { switchPopup } from '../LoginBtn/LoginBtnSlice';
import { useAppDispatch } from '../../app/hooks';
import signIn from '../../api/auth/auth';
import { setSignIn } from './AuthFormSlice';
import { locStorageKeys } from '../../app/constants/api';

function AuthForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({ isVisible: false, text: '' });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError({
      isVisible: false,
      text: '',
    });
    const targets = event.target as HTMLFormElement;
    const email = (targets[0] as HTMLInputElement).value;
    const password = (targets[1] as HTMLInputElement).value;

    signIn({ email, password })
      .then((userData) => {
        localStorage.setItem(
          locStorageKeys.USER_DATA,
          JSON.stringify(userData)
        );
        dispatch(switchPopup());
        dispatch(setSignIn({ isSignIn: true, name: userData.name }));
        navigate(AppRoutes.MAIN_SCREEN);
      })
      .catch((err) => {
        setError({
          isVisible: true,
          text: err.message,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-row">
        <div className="form-title">Authorization</div>
      </div>
      <Input type="email" text="Email:" />
      <Input type="password" text="Password:" />
      <Input type="submit" text="Log In" />
      {error.isVisible && (
        <div className="form-row form-row_disabled">
          <div className="form-text form-text-error">{error.text}</div>
        </div>
      )}
      <div className="form-row">
        <div className="form-text">Do not have an account?</div>
        <NavLink
          to={AppRoutes.AUTH}
          className="form-title"
          onClick={() => {
            dispatch(switchPopup());
          }}
        >
          Registration
        </NavLink>
      </div>
    </form>
  );
}

export default AuthForm;
