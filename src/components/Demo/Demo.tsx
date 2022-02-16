import React, { useState } from 'react';
import demo from '../../app/data/demo';
import './Demo.scss';

function Demo(): JSX.Element {
  const [value, setValue] = useState(false);
  const keyBoardSetValue = (key: string): void => {
    if (key === '32') {
      setValue(true);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="demo">
          <h2 className="section__title">{demo.title}</h2>
          <div className="demo-iframe__wrap">
            {value === false ? (
              <div
                className="demo-iframe__preview"
                role="button"
                tabIndex={0}
                onClick={() => {
                  setValue(true);
                }}
                onKeyUp={(e) => {
                  const { key } = e;
                  keyBoardSetValue(key);
                }}
              >
                <img
                  className="demo-iframe__poster"
                  src={`https://i.ytimg.com/vi_webp/${demo.youtube.id}/sddefault.webp`}
                  alt=""
                />
                <div className="demo-iframe__btn" />
              </div>
            ) : (
              <iframe
                width={demo.youtube.width}
                height={demo.youtube.height}
                src={`https://www.youtube.com/embed/${demo.youtube.id}`}
                title={demo.youtube.title}
                allow={demo.youtube.allow.join('; ')}
              />
            )}
          </div>
        </div>
      </div>
      <script src="https://www.youtube.com/iframe_api" />
    </section>
  );
}

export default Demo;
