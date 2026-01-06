import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ВАЖНО: Точки и слэши имеют значение!
// ./pages/Home означает: "Ищи папку pages рядом со мной, а в ней файл Home"
import Home from './pages/Home';
import Games from './pages/Games';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  );
}

export default App;