import React from 'react';
import './Banner.scss';
import { ReactComponent as BannerSVG } from './BannerSVG.svg';
import banner from '../../app/data/banner';

function Banner(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <div className="banner">
          <div className="banner__container">
            <div className="banner__text">
              <h1 className="banner__title">{banner.title}</h1>
              <div className="banner__desc">
                {banner.desc.map((item) => {
                  return <p key={Date.now() + Math.random() * 10}>{item}</p>;
                })}
              </div>
            </div>
            <div className="banner__img">
              <BannerSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
