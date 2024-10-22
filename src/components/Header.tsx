import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-700 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code size={28} className="mr-2 text-indigo-300" />
          <h1 className="text-2xl font-bold">Muna Kinyamal Sirkorei</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-indigo-200 transition duration-300">About</a>
          <a href="#experience" className="hover:text-indigo-200 transition duration-300">Experience</a>
          <a href="#projects" className="hover:text-indigo-200 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-indigo-200 transition duration-300">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#about" className="hover:text-indigo-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" className="hover:text-indigo-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#projects" className="hover:text-indigo-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="hover:text-indigo-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;