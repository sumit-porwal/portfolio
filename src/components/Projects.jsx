import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Management System",
      description: "A full-stack Django + React platform for hospitals, covering billing, labs, digital signatures, and insurance.",
      tech: ["Django", "React", "PostgreSQL", "AWS"],
      role: "Full-stack Developer",
      links: { demo: "#", code: "#" }
    },
    {
      title: "FinTech Dashboard",
      description: "Real-time financial data visualization dashboard with encryption and secure transaction monitoring.",
      tech: ["React", "D3.js", "Node.js", "Redis"],
      role: "Frontend Lead",
      links: { demo: "#", code: "#" }
    },
    {
      title: "AI Image Generator",
      description: "SaaS application integrating Stable Diffusion for custom image generation with credit system.",
      tech: ["Python", "FastAPI", "React", "Stripe"],
      role: "Solo Developer",
      links: { demo: "#", code: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured <span className="text-neon">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl">Building things that matter. Here are some of my recent works.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:border-neon/30 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-6 h-48 bg-surface/50 rounded-xl flex items-center justify-center border border-white/5 overflow-hidden relative">
                <span className="text-gray-600 font-mono text-sm">&lt;Project_Preview_{idx + 1} /&gt;</span>
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl font-bold font-display mb-2 group-hover:text-neon transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                 <p className="text-xs text-gray-500 mb-2 font-mono">ROLE: {project.role}</p>
                 <div className="flex flex-wrap gap-2">
                   {project.tech.map((t, i) => (
                     <span key={i} className="text-xs px-2 py-1 bg-surface rounded text-gray-300 border border-white/5">{t}</span>
                   ))}
                 </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/5">
                <a href={project.links.code} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Github size={16} /> Code
                </a>
                <a href={project.links.demo} className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon transition-colors ml-auto">
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
