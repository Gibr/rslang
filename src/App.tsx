import './App.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './components/Router/Router';
import Popup from './components/Popup/Popup';
import { RootState } from './app/store';

function App() {
  const isPopupOpened = useSelector(
    (state: RootState) => state.loginBtn.isOpened
  );

  return (
    <div className="app-wrapper">
      <Header />
      <AppRouter />
      {isPopupOpened ? <Popup /> : false}
      <Footer />
    </div>
  );
}

export default App;
