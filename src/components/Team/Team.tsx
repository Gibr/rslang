import React from 'react';
import teammate from '../../app/data/teammate';
import './Team.scss';

function Team(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <div className="team">
          <h2 className="section__title">Our team</h2>
          <ul className="team-list">
            {teammate.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    className="team-member"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={`team-member__img ${item.name.toLocaleLowerCase()}`}
                    />
                    <div className="team-member__login">@{item.login}</div>
                    <div className="team-member__name">{item.name}</div>
                    <ul className="team-member__contribution">
                      {item.contribution.map((element) => {
                        return <li key={element.id}>{element.unit}</li>;
                      })}
                    </ul>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Team;
