import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Terminal from './Terminal';
import { Link } from 'react-router-dom';

const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block group">
       <style>{`
        @keyframes glitch-anim {
          0% { transform: translate(0); opacity: 0; }
          20% { transform: translate(-4px, 4px); opacity: 1; }
          40% { transform: translate(-4px, -4px); opacity: 0.5; }
          60% { transform: translate(4px, 4px); opacity: 1; }
          80% { transform: translate(4px, -4px); opacity: 0.5; }
          100% { transform: translate(0); opacity: 0; }
        }
      `}</style>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full text-neon opacity-0 group-hover:opacity-100 transition-all duration-100"
        style={{ animation: 'glitch-anim 0.3s cubic-bezier(.25, .46, .45, .94) both infinite', display: 'none' }}
      >
        {text}
      </span>
       {/* Use a class to toggle display on hover via CSS if needed, or stick to group-hover with inline animation override */}
       <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon opacity-0 group-hover:opacity-100 transition-all duration-100"
             style={{ animation: 'glitch-anim 0.3s infinite reverse' }}>
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-100" 
            style={{ animation: 'glitch-anim 0.3s infinite', animationDelay: '0.1s' }}>
        {text}
      </span>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden bg-black">
      {/* Dynamic Retro Grid Background */}
      <div className="absolute inset-0 overflow-hidden perspective-[1000px]">
        {/* Static Grid - Increased Opacity to 0.1 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent_10%,black_100%)]"></div>
        {/* Dynamic Grid - Increased Opacity to 0.3 */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#0aff9d33_1px,transparent_1px),linear-gradient(to_bottom,#0aff9d33_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{ backgroundPosition: ["0px 0px", "0px 60px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)' }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight select-none">
            I build <GlitchText text="fast" />, <GlitchText text="scalable" />, and <span className="text-neon">clean</span> digital products.
          </h1>
          <p className="text-xl text-gray-400 max-w-lg">
            Full-stack developer who loves solving hard problems with simple code.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/projects"
              className="group px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neon transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(10,255,157,0.4)]"
            >
              View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="/resume.pdf" 
              className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors duration-300 flex items-center gap-2"
            >
              Download Resume <Download size={20} />
            </a>
          </div>
        </motion.div>
        
        <div className="flex justify-center lg:justify-end relative">
             {/* Glow behind terminal */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon/10 blur-[80px] rounded-full pointer-events-none"></div>
             <Terminal />
        </div>
      </div>
    </section>
  )
}

export default Hero;
