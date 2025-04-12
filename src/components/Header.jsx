import React from 'react';
import logo from '../assets/WhatsApp Image 2025-03-22 at 16.49.56_efc6d68a.jpg';

const Header = () => (
  <header style={{ display: 'flex', alignItems: 'center', gap:'1rem', padding: '1rem', background: '#222', color: 'fff'}}>
    <img src={logo} alt="LebEats Logo" style={{ height: '50px', borderRadius: '8px' }} />
    <h1 style={{ margin: 0 }}>LebEats</h1>
  </header>
);

export default Header;
