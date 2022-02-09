import React from 'react';
import './Input.scss';

function InputPassword(): JSX.Element {
  return (
    <label className="input-label" htmlFor="password">
      <input type="password" id="password" required />
      <p className="input-text">Password:</p>
    </label>
  );
}

export default InputPassword;
