import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <a href="/">Off Topic Chat</a>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav className={`lg:flex lg:items-center lg:w-auto w-full ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
            <li>
              <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
