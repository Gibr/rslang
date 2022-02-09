import React from 'react';
import { useDispatch } from 'react-redux';
import './Popup.scss';
import Form from '../Form/Form';
import { switchPopup } from '../LoginBtn/LoginBtnSlice';

function Popup(): JSX.Element {
  const dispatch = useDispatch();

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
        <Form />
      </div>
    </div>
  );
}

export default Popup;
