import React from 'react';
import logo from '../assets/WhatsApp Image 2025-03-22 at 16.49.56_efc6d68a.jpg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: themeStyles.backgroundColor,
    color: themeStyles.color,
    fontFamily: 'Arial, sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <img src={logo} alt="LebEats Logo" style={{ height: '40px', borderRadius: '8px' }} />
      <h1 style={{ fontSize: '1.8rem', color: '#d62828', fontWeight: 'bold', margin: 0 }}>LebEats</h1>
    </div>
    {isMobile ? (
      <>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: themeStyles.color
          }}>
          ☰
        </button>
        {menuOpen && (
          <nav style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: themeStyles.backgroundColor,
            padding: '1rem 2rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <Link to="/" style={{ textDecoration: 'none', color: themeStyles.color }}>Home</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: themeStyles.color }}>About Us</Link>
            <Link to="/restaurants" style={{ textDecoration: 'none', color: themeStyles.color }}>Restaurants</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: themeStyles.color }}>Contact Us</Link>
            <button onClick={() => setDarkMode(!darkMode)} style={{
              backgroundColor: '#d62828',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </nav>
        )}
      </>
    ) : (
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: themeStyles.color, fontWeight: '600' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: themeStyles.color, fontWeight: '600' }}>About Us</Link>
        <Link to="/restaurants" style={{ textDecoration: 'none', color: themeStyles.color, fontWeight: '600' }}>Restaurants</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: themeStyles.color, fontWeight: '600' }}>Contact Us</Link>
        <button onClick={() => setDarkMode(!darkMode)} style={{
          backgroundColor: '#d62828',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
    )}
  </header>
);

export default Header;