import './MainScreen.scss';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Advantages from '../../components/Advantages/Advantages';
import Demo from '../../components/Demo/Demo';

function MainPage(): JSX.Element {
  return (
    <main className="page-wrapper main-screen__page-wrapper">
      <Banner />
      <Advantages />
      <Demo />
    </main>
  );
}

export default MainPage;
