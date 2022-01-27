import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<h1>Main</h1>} />
      <Route path="/authorization" element={<h1>Authorization</h1>} />
      <Route path="/textbook" element={<h1>Textbook</h1>} />
      <Route path="/statistics" element={<h1>Statistics</h1>} />
      <Route path="/games" element={<h1>Games</h1>} />
    </Routes>
  );
}

export default Router;
