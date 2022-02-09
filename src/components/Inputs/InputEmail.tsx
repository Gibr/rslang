import React from 'react';
import './Input.scss';

function InputEmail(): JSX.Element {
  return (
    <label className="input-label" htmlFor="email">
      <input type="email" id="email" required />
      <p className="input-text">Email:</p>
    </label>
  );
}

export default InputEmail;
