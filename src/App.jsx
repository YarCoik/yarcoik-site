import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Импортируем наши "картины" (страницы)
import Home from './pages/Home';
import Games from './pages/Games';

function App() {
  return (
    // Routes - это место, где меняются страницы
    <Routes>
      {/* Если адрес сайта "/", показываем Home */}
      <Route path="/" element={<Home />} />
      
      {/* Если адрес сайта "/games", показываем Games */}
      <Route path="/games" element={<Games />} />
    </Routes>
  );
}

export default App;