import React from 'react';
import './Input.scss';

function InputSubmit(): JSX.Element {
  return (
    <label className="input-label" htmlFor="password">
      <input
        className="input-submit"
        type="submit"
        value="Log in"
        id="submit"
      />
    </label>
  );
}

export default InputSubmit;
