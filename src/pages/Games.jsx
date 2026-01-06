import React from 'react';
import { Link } from 'react-router-dom';

function Games() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-[#00f3ff] mb-4">CYBER GAMES</h1>
      <p className="mb-8">Здесь скоро будут игры...</p>
      
      {/* Кнопка назад на главную */}
      <Link to="/" className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200">
        ← Назад домой
      </Link>
    </div>
  );
}

export default Games;