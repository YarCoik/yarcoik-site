import React, { useState, useEffect } from 'react';
import { Github, Send, Mail, Code2, Terminal, ArrowRight } from 'lucide-react';

function App() {
  // Эффект появления текста
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white selection:bg-white/20 overflow-hidden">
      
      {/* --- ФОНОВЫЕ ЭФФЕКТЫ (Градиенты) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Верхний свет */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        {/* Нижний свет */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full"></div>
        {/* Сетка */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      {/* --- КОНТЕНТ --- */}
      <div className={`relative z-10 max-w-2xl px-6 text-center transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Бейджик статуса */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Work in Progress</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          Yaroslav Dev.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg mx-auto">
          Я создаю цифровые продукты и веб-интерфейсы. <br/>
          Прямо сейчас я обновляю свое портфолио.
        </p>

        {/* Кнопки соцсетей */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <a href="https://t.me/yarcoik_live" target="_blank" rel="noreferrer" 
             className="group flex items-center gap-3 px-6 py-3.5 bg-white text-black rounded-xl font-semibold hover:bg-zinc-200 transition-all active:scale-95 w-full sm:w-auto justify-center">
            <Send size={20} />
            <span>Telegram</span>
            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>

          <div className="flex gap-4 w-full sm:w-auto justify-center">
            <a href="https://github.com/YarCoik" target="_blank" rel="noreferrer" 
               className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white">
              <Github size={22} />
            </a>
            <a href="mailto:contact@yaroslav.dev" 
               className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white">
              <Mail size={22} />
            </a>
          </div>

        </div>

        {/* Футер */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-mono">
          <div className="flex items-center gap-2">
            <Terminal size={12} />
            <span>v2.0.0 (Building...)</span>
          </div>
          <p>© 2025 Yaroslav. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}

export default App;