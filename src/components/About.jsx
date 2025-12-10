import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Zap } from 'lucide-react';

const About = () => {
  const badges = [
    { icon: <Code size={14} />, text: "Full-stack" },
    { icon: <Cpu size={14} />, text: "Problem Solver" },
    { icon: <Zap size={14} />, text: "Quick Learner" },
    { icon: <Globe size={14} />, text: "SEO Background" },
  ];

  return (
    <section id="about" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface border border-white/10 relative group">
              {/* Placeholder for Image */}
              <div className="absolute inset-0 flex items-center justify-center ">
                <img src="./profile_bw_real.jpeg" alt="" />
                {/* <span className="text-gray-600 font-mono text-lg">&lt;Profile_Image /&gt;</span> */}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neon/20 rounded-full blur-2xl group-hover:bg-neon/30 transition-all duration-500"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl group-hover:bg-neon-blue/30 transition-all duration-500"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              About <span className="text-neon">Me</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi, I’m Sumit — a full-stack developer based in India.
              </p>
              <p>
                I build scalable apps using Django, React, and cloud-native workflows.
                I care about performance, developer experience, and solving real business problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {badges.map((badge, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-surface border border-white/10 rounded-full text-sm text-gray-300 flex items-center gap-2 hover:border-neon/50 hover:text-neon transition-colors duration-300 cursor-default"
                >
                  {badge.icon}
                  {badge.text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;
