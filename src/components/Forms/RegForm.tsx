import React from 'react';
import './Form.scss';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import { switchPopup } from '../LoginBtn/LoginBtnSlice';
import Input from '../Input/Input';

function RegForm(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <form action="" className="form">
      <div className="form-row">
        <div className="form-title">Registration</div>
      </div>
      <Input type="text" text="Name:" />
      <Input type="email" text="Email:" />
      <Input type="password" text="Password:" />
      <Input type="password" text="Confirm password:" />
      <Input type="submit" text="Confirm" />
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
