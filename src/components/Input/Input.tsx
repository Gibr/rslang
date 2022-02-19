import React, { useState } from 'react';
import './Input.scss';

interface IInputProps {
  type: string;
  text: string;
}

export default function Input(props: IInputProps): JSX.Element {
  const { type, text } = props;
  const id = `${type}-${Date.now()}`;
  const [value, setValue] = useState('');

  return (
    <label className="input-label" htmlFor={type}>
      {type === 'submit' ? (
        <input className="input-submit" type={type} value={text} id={id} />
      ) : (
        <>
          <input
            className={value !== '' ? 'input-focus' : ''}
            type={type}
            id={id}
            required
            onInput={(e) => {
              setValue((e.target as HTMLInputElement).value);
            }}
          />
          <p className="input-text">{text}</p>
        </>
      )}
    </label>
  );
}
