import React from 'react';
import './Form.scss';
import { NavLink } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import Input from '../Input/Input';
import { switchPopup } from '../LoginBtn/LoginBtnSlice';
import { useAppDispatch } from '../../app/hooks';

function AuthForm(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <form action="" className="form">
      <div className="form-row">
        <div className="form-title">Authorization</div>
      </div>
      <Input type="email" text="Email:" />
      <Input type="password" text="Password:" />
      <Input type="submit" text="Log In" />
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
