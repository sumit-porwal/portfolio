import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-surface border-t border-white/5 text-sm text-gray-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p>&copy; {new Date().getFullYear()} Sumit. Built with React & Tailwind.</p>
        </div>
        
        {/* Tech Trivia / Easter Egg */}
        <div className="hidden md:block font-mono text-xs text-gray-700 bg-black/20 px-3 py-1 rounded">
          &gt; echo "Hello World"
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
