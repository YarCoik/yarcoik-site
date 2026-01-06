import React, { useState, useRef } from 'react';
import { 
  Github, Send, Mail, Code2, Terminal, ArrowRight, 
  Layers, Monitor, Music, Gamepad2, Star, Users 
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* --- ЭФФЕКТЫ --- */

// Прожектор для карточек
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

// Пылинки на фоне
const Particles = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <div key={i} className="absolute bg-white/10 rounded-full blur-[1px] animate-float"
                     style={{
                         width: Math.random() * 3 + 1 + 'px',
                         height: Math.random() * 3 + 1 + 'px',
                         top: Math.random() * 100 + '%',
                         left: Math.random() * 100 + '%',
                         animationDuration: Math.random() * 20 + 10 + 's',
                         animationDelay: Math.random() * 5 + 's',
                         opacity: Math.random() * 0.5 + 0.1
                     }}
                ></div>
            ))}
        </div>
    )
}

function App() {
  // Убрал useState(false), чтобы контент не скрывался при старте
  // Если нужна анимация появления, лучше использовать CSS animate-fade-in

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND --- */}
      {/* FIX: Добавил z-0, чтобы фон точно был сзади */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Шум */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        {/* Градиенты */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        {/* Сетка */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <Particles />
      </div>

      {/* FIX: Убрал условие mounted ? ... : ... Теперь opacity всегда 100 */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 transition-all duration-1000 ease-out opacity-100 translate-y-0">
        
        {/* --- HERO --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:border-white/20 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
            Yaroslav Dev.
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto">
            Frontend Developer & Creator. <br/>
            Строю современные веб-интерфейсы, расширения и интерактивные опыты.
          </p>
        </div>

        {/* --- SOCIALS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <a href="https://t.me/yarcoik_live" target="_blank" rel="noreferrer" 
             className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5">
            <Send size={18} /> Telegram
          </a>
          <a href="https://github.com/YarCoik" target="_blank" rel="noreferrer" 
             className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-xl font-medium text-zinc-300 hover:text-white hover:border-white/30 transition-all active:scale-95">
            <Github size={18} /> GitHub
          </a>
          <a href="mailto:yarcoik@vk.com" 
             className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-xl font-medium text-zinc-300 hover:text-white hover:border-white/30 transition-all active:scale-95">
            <Mail size={18} /> Email
          </a>
        </div>

        {/* --- FEATURED PROJECT (YARBLOX) --- */}
        <div className="mb-24">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Code2 size={16}/> Featured Project
          </h2>

          <a href="https://yarblox.ru" target="_blank" rel="noreferrer" className="block group">
            <SpotlightCard className="bg-zinc-900/40 border border-white/10 rounded-3xl p-1 transition-all hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="bg-zinc-950/80 rounded-[20px] p-8 backdrop-blur-sm relative z-10">
                 <div className="flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Layers size={40} />
                    </div>
                    
                    <div className="flex-1">
                       <div className="flex justify-between items-start">
                         <div>
                           <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-3">
                             YarBLOX <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20">v3.5</span>
                           </h3>
                           <p className="text-zinc-400 mt-3 text-base leading-relaxed">
                             Ультимативное расширение для Roblox. Включает в себя жидкую темную тему, поиск серверов, трекер онлайна и FPS бустер.
                           </p>
                         </div>
                         <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                         </div>
                       </div>

                       <div className="mt-6 flex flex-wrap gap-3">
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-300">
                             <Users size={12}/> 1+ Users
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-300">
                             <Star size={12} className="text-yellow-500"/> 5.0 Rating
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-300">
                             <Monitor size={12}/> Chrome Extension
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </SpotlightCard>
          </a>
        </div>

        {/* --- STACK --- */}
        <div className="mb-24">
          <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {["React", "JavaScript", "Tailwind CSS", "Vite", "Node.js", "Git", "Chrome Extensions API"].map((tech, i) => (
              <div key={i} className="px-4 py-2 rounded-lg bg-zinc-900/50 border border-white/5 text-zinc-400 text-sm hover:border-white/20 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* --- MUSIC VIBE --- */}
        <div className="mb-20 flex justify-center">
           <div className="inline-flex items-center gap-4 px-6 py-4 bg-zinc-900/50 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                <Music size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Coding Vibe</div>
                <div className="flex items-center gap-2">
                   <div className="flex gap-1 h-3 items-end">
                      <span className="w-1 bg-green-500 animate-[pulse_1s_infinite] h-full"></span>
                      <span className="w-1 bg-green-500 animate-[pulse_1.5s_infinite] h-2/3"></span>
                      <span className="w-1 bg-green-500 animate-[pulse_0.8s_infinite] h-3/4"></span>
                   </div>
                   <span className="text-sm font-medium text-white">Lo-Fi / Phonk / Synthwave</span>
                </div>
              </div>
           </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-mono">
          <div className="flex items-center gap-2">
            <Terminal size={12} />
            <span>System Online.</span>
          </div>
          <p>© 2026 Yaroslav.</p>
        </div>

      </div>

      {/* --- CYBER OS BUTTON (FIXED) --- */}
        <div className="fixed bottom-8 right-8 z-50">
          <Link to="/games" className="group flex items-center gap-3 px-5 py-3 bg-[#0a0f14]/90 backdrop-blur-xl border border-[#00f3ff]/30 rounded-2xl hover:scale-105 hover:border-[#00f3ff] transition-all shadow-2xl hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]">
            <div className="relative">
               <Gamepad2 size={24} className="text-[#00f3ff] group-hover:animate-spin" />
               <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">System</div>
              <div className="text-sm font-bold text-white group-hover:text-[#00f3ff] transition-colors">CYBER OS</div>
            </div>
            </Link>
      </div>

    </div>
  );
}

 export default Home;