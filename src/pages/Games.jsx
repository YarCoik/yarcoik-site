// src/pages/Games.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Games() {
  return (
    <div className="w-full h-screen bg-black">
      <Link to="/" className="fixed top-4 left-4 z-50 text-white bg-black/50 px-4 py-2 rounded border border-white/20 hover:bg-white hover:text-black transition-colors">
         ← Назад
      </Link>

      <iframe
        // 👇 ИЗМЕНИЛ ПУТЬ ТУТ (было /games/..., стало /game-files/...)
        src={`/game-files/index.html?v=${Date.now()}`}
        className="w-full h-full border-none"
        title="YarGame"
      />
    </div>
  );
}

export default Games;