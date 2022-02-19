import './PopupWrapper.scss';

import React from 'react';

function PopupWrapper(props: {
  popupName: string;
  popupContent: JSX.Element;
}): JSX.Element {
  const { popupName, popupContent } = props;

  return (
    <div className="overlay">
      <div className={`popup-wrapper ${popupName}-popup`}>{popupContent}</div>
    </div>
  );
}

export default PopupWrapper;
