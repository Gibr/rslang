import React from 'react';
import './Footer.scss';
import { ReactComponent as RSSchcoolSVG } from './icons/rs-school-js.svg';
import { ReactComponent as GithubSVG } from './icons/github.svg';
import team from '../../app/data/teammate';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <a
            className="footer-logo"
            href="https://rs.school/js/"
            target="_blank"
            rel="noreferrer"
          >
            <RSSchcoolSVG />
          </a>
          <div className="footer-members">
            <ul className="footer-members__list">
              {team.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="footer-members__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{item.name}</span>
                    <span className="hover">
                      <GithubSVG />
                      {item.login}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-copyright">© 2022</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
