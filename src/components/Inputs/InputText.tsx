import React from 'react';
import './Input.scss';

function InputText(): JSX.Element {
  return (
    <label className="input-label" htmlFor="text">
      <input type="text" id="text" required />
      <p className="input-text">Name:</p>
    </label>
  );
}

export default InputText;
