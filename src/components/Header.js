import React from 'react'

import './Header.css';

function Header({ logo }) {
  return (
    <header className="Header">
      <img src={logo}/>
    </header>
  );
}

export default Header;