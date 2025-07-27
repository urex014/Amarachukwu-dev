import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
        onClick={() => setIsOpen(false)}
      >
        About
      </NavLink>
      <NavLink
        to='/projects'
        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
        onClick={() => setIsOpen(false)}
      >
        Projects
      </NavLink>
      <NavLink
        to='/resume'
        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
        onClick={() => setIsOpen(false)}
      >
        Resume
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
        onClick={() => setIsOpen(false)}
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <header className='header flex items-center justify-between p-4'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>

      {/* Desktop Nav */}
      <nav className='hidden md:flex text-lg gap-7 font-medium backdrop-blur-lg bg-white/30 p-4 rounded-lg'>
        {navLinks}
      </nav>

      {/* Mobile Toggle Button */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-black bg-white/30 p-2 rounded-lg backdrop-blur text-xl'
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <nav className='absolute top-20 right-4 bg-white/90 backdrop-blur-lg p-6 rounded-xl flex flex-col gap-5 z-50 shadow-lg md:hidden'>
          {navLinks}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
