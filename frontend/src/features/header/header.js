// src/features/header/Header.js
import React from 'react';
import './header.css';
import logo from '../../asset/icon.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Off Topic Logo" className="header-logo" />
      <h1 className="header-title">Off Topic</h1>
    </header>
  );
};

export default Header;
