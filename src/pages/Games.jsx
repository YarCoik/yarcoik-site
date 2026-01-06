// src/pages/Games.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Games() {
  return (
    <div className="w-full h-screen bg-black">
      {/* Кнопка назад */}
      <Link to="/" className="fixed top-1 left-1 z-50 text-white bg-black/0 px-0.2 py-0.2 rounded border border-black/0">
         ←
      </Link>

      {/* Вставка обычного HTML файла через iframe */}
          <iframe
            src={`/games/index.html?v=${Date.now()}`}
        className="w-full h-full border-none"
        title="YarGame"
      />
    </div>
  );
}

export default Games;