import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './components/Router/Router';
import Popup from './components/Popup/Popup';
import { RootState } from './app/store';
import { useAppSelector } from './app/hooks';

function App() {
  const isPopupOpened = useAppSelector(
    (state: RootState) => state.loginBtn.isOpened
  );

  return (
    <div className="app-wrapper">
      <Header />
      <AppRouter />
      {isPopupOpened && <Popup />}
      <Footer />
    </div>
  );
}

export default App;
