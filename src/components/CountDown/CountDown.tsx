import './CountDown.scss';

import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { switchPopup } from '../PopupWrapper/popupWrapperSlice';

function CountDown(props: { initialSeconds: number }): JSX.Element {
  const { initialSeconds = 0 } = props;

  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        dispatch(switchPopup());
        clearInterval(myInterval);
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [dispatch, seconds]);

  return (
    <div className="timer-output">{seconds < 10 ? `0${seconds}` : seconds}</div>
  );
}

export default CountDown;
