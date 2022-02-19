import React, { useState } from 'react';
import './Form.scss';
import { NavLink } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import { switchPopup } from '../LoginBtn/LoginBtnSlice';
import Input from '../Input/Input';
import { useAppDispatch } from '../../app/hooks';
import createUser from '../../api/auth/registration';
import signIn from '../../api/auth/auth';

function RegForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [error, setError] = useState({ isVisible: false, text: '' });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError({
      isVisible: false,
      text: '',
    });

    const targets = event.target as HTMLFormElement;

    if (
      (targets[2] as HTMLInputElement).value !==
      (targets[3] as HTMLInputElement).value
    ) {
      setError({
        isVisible: true,
        text: 'You entered two different passwords. Please try again',
      });
    } else {
      const name = (targets[0] as HTMLInputElement).value;
      const email = (targets[1] as HTMLInputElement).value;
      const password = (targets[2] as HTMLInputElement).value;

      createUser({ name, email, password })
        .then(() => {
          signIn({ email, password }).catch((err) => {
            setError({
              isVisible: true,
              text: err.message,
            });
          });
        })
        .catch((err) => {
          setError({
            isVisible: true,
            text: err.message,
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-row">
        <div className="form-title">Registration</div>
      </div>
      <Input type="text" text="Name:" />
      <Input type="email" text="Email:" />
      <Input type="password" text="Password:" />
      <Input type="password" text="Confirm password:" />
      <Input type="submit" text="Confirm" />
      {error.isVisible && (
        <div className="form-row form-row_disabled">
          <div className="form-text form-text-error">{error.text}</div>
        </div>
      )}

      <div className="form-row">
        <div className="form-text">Do you already have an account?</div>
        <NavLink
          to={AppRoutes.AUTH}
          className="form-title"
          onClick={() => {
            dispatch(switchPopup());
          }}
        >
          Authorization
        </NavLink>
      </div>
    </form>
  );
}

export default RegForm;
