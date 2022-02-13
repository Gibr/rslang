import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './components/Router/Router';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
