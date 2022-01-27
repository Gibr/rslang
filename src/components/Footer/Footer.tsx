import React from 'react';
import './Footer.scss';

/*
 * TODO:
 * Replace memebers array and his interface to constants.ts after merge branch RSL-005
 */

interface member {
  name: string;
  login: string;
  href: string;
}

const memeberArray: Array<member> = [
  {
    name: 'Denis',
    login: 'Gibr',
    href: 'https://github.com/Gibr',
  },
  {
    href: 'https://github.com/kykysja',
    login: 'kykysja',
    name: 'Julia',
  },
  {
    href: 'https://github.com/allyksander',
    login: 'allyksander',
    name: 'Aleksandr',
  },
];

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          className="footer-logo"
          href="https://rs.school/js/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./images/rs-school-js.svg" alt="" />
        </a>
        <div className="footer-members">
          <ul className="footer-members__list">
            {memeberArray.map((item) => (
              <li key={Date.now() + Math.random()}>
                <a
                  href={item.href}
                  className="footer-members__item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.name}</span>
                  <span className="hover">{item.login}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          className="footer-logo"
          href="https://github.com/Gibr/rslang/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./images/github.svg" alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
