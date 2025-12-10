import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-white/5 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-mono text-white hover:text-neon transition-colors duration-300">
          sumit_dev
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
             <Link 
               key={item.label}
               to={item.path} 
               className="text-sm font-medium text-gray-300 hover:text-neon transition-colors duration-300"
             >
               {item.label}
             </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-neon transition-colors" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-neon transition-colors duration-300 block"
                >
                   {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
export default Navbar
