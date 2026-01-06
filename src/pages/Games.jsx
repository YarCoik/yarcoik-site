// src/pages/Games.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Games() {
  return (
    <div className="w-full h-screen bg-black">
      <Link to="/" className="fixed top-0.1 left-0.1 z-50 text-white bg-black/0 px-1 py-1 rounded border border-white/0 hover:bg-white hover:text-black transition-colors">
         ←
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