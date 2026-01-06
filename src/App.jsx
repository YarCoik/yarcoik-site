import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 👇 ТЫ СКОРЕЕ ВСЕГО ЗАБЫЛ ВОТ ЭТИ ДВЕ СТРОЧКИ 👇
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