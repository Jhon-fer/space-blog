import React from 'react';
import { ButtonMenu } from './ButtonMenu';
import '@styles/Header.css';

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='header__nav--logo'><a href="/">SPACE BLOG</a></div>
        <ul className={`header__nav-ul ${openMenu ? 'active' : ''}`}>
          <li className='header__nav-ul--li'><a onClick={handleMenu} href="#">Home</a></li>
          <li className='header__nav-ul--li'><a onClick={handleMenu} href="#about">About Us</a></li>
          <li className='header__nav-ul--li'><a onClick={handleMenu} href="#gallery">Gallery</a></li>
          <li className='header__nav-ul--li'><a onClick={handleMenu} href="#blog">Blog</a></li>
        </ul>
        <div className='hamburguer'>
          <ButtonMenu openMenu={openMenu} handleMenu={handleMenu} />
        </div>
      </nav>
    </header>
  )
}
  
export { Header };