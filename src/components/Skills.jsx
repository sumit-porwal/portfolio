import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core",
      skills: ["JavaScript", "Python", "C", "C++"]
    },
    {
      title: "Frontend",
      skills: ["React", "MUI", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Django", "REST APIs", "PostgreSQL", "AWS RDS"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "SEO", "ComfyUI"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Technical <span className="text-neon">Arsenal</span></h2>
          <p className="text-gray-400">The tools I use to build digital products.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface/50 border border-white/5 rounded-xl p-6 hover:border-neon/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold font-mono text-neon mb-6 border-b border-white/10 pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-sm text-gray-300 hover:text-white hover:border-white/30 hover:shadow-[0_0_10px_rgba(10,255,157,0.2)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
