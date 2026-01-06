import React, { useState, useEffect } from 'react';
import { 
  Github, Send, Mail, Code2, Terminal, ArrowRight, 
  Layers, Cpu, Music, Gamepad2, Star, GitBranch 
} from 'lucide-react';

function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        {/* Сетка */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className={`relative z-10 max-w-3xl mx-auto px-6 py-20 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:border-blue-500/30 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Open to work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
            Yaroslav Dev.
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto">
            Frontend Developer & Extension Creator. <br/>
            Создаю современные веб-интерфейсы и инструменты для геймеров.
          </p>
        </div>

        {/* --- SOCIALS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a href="https://t.me/yarcoik_live" target="_blank" rel="noreferrer" 
             className="group flex items-center gap-2 px-5 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all active:scale-95">
            <Send size={18} /> Telegram
          </a>
          <a href="https://github.com/YarCoik" target="_blank" rel="noreferrer" 
             className="flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-white/10 rounded-xl font-medium text-zinc-300 hover:text-white hover:border-white/30 transition-all">
            <Github size={18} /> GitHub
          </a>
          <a href="mailto:contact@yaroslav.dev" 
             className="flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-white/10 rounded-xl font-medium text-zinc-300 hover:text-white hover:border-white/30 transition-all">
            <Mail size={18} /> Email
          </a>
        </div>

        {/* --- TECH STACK --- */}
        <div className="mb-20">
          <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "JavaScript", "Tailwind CSS", "Vite", "Node.js", "Git", "Chrome Extensions"].map((tech, i) => (
              <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-sm hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400 transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* --- PROJECTS --- */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Code2 className="text-blue-500" /> Featured Project
          </h2>

          <a href="https://yarblox-site.vercel.app/" target="_blank" rel="noreferrer" 
             className="group block relative bg-zinc-900/40 border border-white/10 rounded-3xl p-1 overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20">
            
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="bg-zinc-950/80 rounded-[20px] p-6 backdrop-blur-sm h-full flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
               {/* Icon Placeholder */}
               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shrink-0">
                 <Layers size={32} />
               </div>
               
               <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-center sm:justify-start gap-2">
                    YarBLOX <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30">v3.5</span>
                  </h3>
                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                    Ультимативное расширение для Roblox. Жидкая тема, сервер-снайпер, FPS бустер и трекер онлайна. 
                    Более 100+ активных пользователей.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="text-xs text-zinc-500 flex items-center gap-1"><Star size={12}/> 5.0 Rating</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1"><Users size={12}/> 100+ Users</span>
                  </div>
               </div>

               <div className="self-center">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                  </div>
               </div>
            </div>
          </a>
        </div>

        {/* --- GITHUB STATS --- */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GitBranch className="text-purple-500" /> Activity
          </h2>
          <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-4 overflow-hidden hover:border-white/10 transition-colors">
             <img 
               src="https://github-readme-stats.vercel.app/api?username=YarCoik&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=a1a1aa&icon_color=3b82f6&count_private=true" 
               alt="GitHub Stats" 
               className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
             />
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
          <p>© 2025 Yaroslav. Built with React & Vite.</p>
        </div>

      </div>

      {/* --- SECRET OS BUTTON (FIXED) --- */}
      <div className="fixed bottom-6 right-6 z-50">
          <a href="/games/" className="group flex items-center gap-3 px-4 py-3 bg-black/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl hover:scale-105 hover:border-blue-500 transition-all shadow-2xl hover:shadow-blue-500/20">
            <div className="relative">
               <Gamepad2 size={24} className="text-blue-500 group-hover:animate-spin" />
               <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-[10px] text-zinc-500 font-bold uppercase">System</div>
              <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Cyber OS</div>
            </div>
          </a>
      </div>

    </div>
  );
}

export default App;