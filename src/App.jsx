import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Footer from './components/Footer';

import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-white selection:bg-neon selection:text-black flex flex-col cursor-none">
        <NoiseOverlay />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
