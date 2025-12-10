import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const Terminal = () => {
  const [text, setText] = useState('');
  const fullText = `> Initializing system...
> Loading modules...
> [SUCCESS] Full-stack environment ready.
> [INFO] Current Location: India
> [INFO] Skills: React, Django, AWS
> Ready to build. █`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-lg mx-auto bg-surface/80 backdrop-blur-sm border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono text-sm"
    >
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
          <TerminalIcon size={12} />
          <span>zsh — 80x24</span>
        </div>
      </div>
      <div className="p-4 min-h-[300px] text-gray-300 leading-relaxed whitespace-pre-wrap">
        {text}
      </div>
    </motion.div>
  );
};

export default Terminal;
