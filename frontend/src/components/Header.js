// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-fixed ${isScrolled ? 'bg-opacity-90' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-lg font-bold">Off Topic Chat</div>
        <div className="flex items-center">
          <ThemeToggle />
          <button onClick={toggleMenu} className="ml-4">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="header-menu">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#home">proximamente 1</a></li>
            <li><a href="#about">proximamente 2</a></li>
            <li><a href="#contact">proximamente 3 ;)</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
