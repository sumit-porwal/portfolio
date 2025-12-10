import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Terminal from './Terminal';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
      {/* Background Grid - CSS Grid pattern could be added here or in global styles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
            I build <span className="text-white">fast</span>, <span className="text-white">scalable</span>, and <span className="text-neon">clean</span> digital products.
          </h1>
          <p className="text-xl text-gray-400 max-w-lg">
            Full-stack developer who loves solving hard problems with simple code.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/projects"
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neon transition-colors duration-300 flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </Link>
            <a 
              href="/resume.pdf" 
              className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors duration-300 flex items-center gap-2"
            >
              Download Resume <Download size={20} />
            </a>
          </div>
        </motion.div>
        
        <div className="flex justify-center lg:justify-end">
             <Terminal />
        </div>
      </div>
    </section>
  )
}

export default Hero;
