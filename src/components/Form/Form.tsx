import React from 'react';
import './Form.scss';
import AppRoutes from '../../app/constants/routes';
import InputEmail from '../Inputs/InputEmail';
import InputPassword from '../Inputs/InputPassword';
import InputSubmit from '../Inputs/InputSubmit';

function Form(): JSX.Element {
  return (
    <form action="" className="form">
      <div className="form-row">
        <div className="form-title">Hello!</div>
        <div className="form-text">Login, Please...</div>
      </div>
      <InputEmail />
      <InputPassword />
      <InputSubmit />
      <div className="form-row">
        <div className="form-text">Do not have an account?</div>
        <a
          href={AppRoutes.AUTH}
          className="form-title"
          target="_blank"
          rel="noreferrer"
        >
          Register
        </a>
      </div>
    </form>
  );
}

export default Form;
