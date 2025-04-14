import React from 'react';
import logo from '../assets/WhatsApp Image 2025-03-22 at 16.49.56_efc6d68a.jpg';
import { Link } from 'react-router-dom';

const Header = () => (
    <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '1.8rem', color: '#d62828', fontWeight: 'bold' }}>LebEats</h1>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>About Us</Link>
          <Link to="/restaurants" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>Restaurants</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>Contact Us</Link>
        </nav>
    </header>
);

export default Header;