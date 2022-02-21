import React, { useEffect } from 'react';
import './Popup.scss';
import AuthForm from '../Forms/AuthForm';
import { switchPopup } from '../LoginBtn/LoginBtnSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { preventPageScroll } from '../../utils/utils';
import { RootState } from '../../app/store';

function Popup(): JSX.Element {
  const dispatch = useAppDispatch();
  const isPopupOpened = useAppSelector(
    (state: RootState) => state.popup.isOpened
  );

  /*
   * If we dont't need to prevent scroll of page behind the overlay,
   * we can remove this useEffect
   */
  useEffect(() => {
    preventPageScroll(isPopupOpened);
  }, [isPopupOpened]);

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
