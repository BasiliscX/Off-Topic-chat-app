import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white relative">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-lg font-bold">Off Topic Chat</div>
        <div className="flex items-center">
          <ThemeToggle />
          <button onClick={toggleMenu} className="ml-4">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <nav className={`absolute left-0 w-full bg-gray-800 bg-opacity-90 z-50 ${isOpen ? 'nav-visible' : 'nav-hidden'}`}>
        <ul className="flex flex-col space-y-4 p-4">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
