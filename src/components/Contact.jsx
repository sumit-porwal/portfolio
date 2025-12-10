import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
            Let’s build something <span className="text-neon">great</span>.
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I’m currently open to freelance projects and remote full-time roles. 
            If you have a project that needs a clean, scalable solution, let's chat.
          </p>
          
          <a 
            href="mailto:sumit@example.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-neon hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(10,255,157,0.4)]"
          >
            <Mail size={24} />
            Email Me
            <ArrowRight size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact;
