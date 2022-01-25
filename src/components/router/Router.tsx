import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';
import NavMenu from '../navMenu/NavMenu';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavMenu />
              <App />
            </>
          }
        />
        <Route
          path="/authorization"
          element={
            <>
              <NavMenu />
              <h1>Authorization</h1>
            </>
          }
        />
        <Route
          path="/textbook"
          element={
            <>
              <NavMenu />
              <h1>Textbook</h1>
            </>
          }
        />
        <Route
          path="/statistics"
          element={
            <>
              <NavMenu />
              <h1>Statistics</h1>
            </>
          }
        />
        <Route
          path="/games"
          element={
            <>
              <NavMenu />
              <h1>Games</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
