import React from 'react';
import '@styles/ButtonMenu.css';

const ButtonMenu = ({ openMenu, handleMenu }) => {
  return (
    <div 
      onClick={handleMenu}
      className={`icon nav-icon-5 ${openMenu ? 'open' : ''}`}
    >
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}
 
export { ButtonMenu };