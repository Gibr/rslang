import React from 'react';
import './Popup.scss';
import AuthForm from '../Forms/AuthForm';
import { switchPopup } from '../LoginBtn/LoginBtnSlice';
import { useAppDispatch } from '../../app/hooks';

function Popup(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="popup">
      <button
        className="popup__close"
        type="button"
        aria-label="close popup"
        onClick={() => {
          dispatch(switchPopup());
        }}
      />
      <div className="popup__container">
        <AuthForm />
      </div>
    </div>
  );
}

export default Popup;
