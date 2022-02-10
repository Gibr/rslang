import React from 'react';
import './Form.scss';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import InputText from '../Inputs/InputText';
import InputEmail from '../Inputs/InputEmail';
import InputPassword from '../Inputs/InputPassword';
import InputSubmit from '../Inputs/InputSubmit';
import { switchPopup } from '../LoginBtn/LoginBtnSlice';

function PopupForm(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <form action="" className="form">
      <div className="form-row">
        <div className="form-title">Registration</div>
      </div>
      <InputText />
      <InputEmail />
      <InputPassword />
      <InputSubmit />
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

export default PopupForm;
