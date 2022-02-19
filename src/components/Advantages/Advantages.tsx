import React from 'react';
import advantages from '../../app/data/advantages';
import './Advantages.scss';

function Advantages(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <div className="advantages">
          <h2 className="section__title">{advantages.title}</h2>
          <ul className="advantages__list">
            {advantages.data.map((item) => {
              return (
                <li key={item.id}>
                  <div className="advantages__item">
                    <div className="advantages__icon-wrap">
                      <div className="advantages__icon" />
                    </div>
                    <div className="advantages__name">{item.name}</div>
                    <div className="advantages__desc">{item.desc}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
