import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Импортируем Роуты
import Home from './pages/Home'; // Твой главный лендинг
import Games from './pages/Games'; // Твоя страница игр

function App() {
  return (
    // Вместо верстки тут теперь только "Карта сайта"
    <Routes>
      {/* Если путь "/", показываем Home */}
      <Route path="/" element={<Home />} />
      
      {/* Если путь "/games", показываем Games */}
      <Route path="/games" element={<Games />} />
      
      {/* Можно добавить 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;