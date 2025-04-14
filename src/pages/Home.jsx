import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#222',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <h1 style={{ fontSize: '1.8rem', color: '#d62828' }}>LebEats</h1>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>About Us</Link>
          <Link to="/restaurants" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Restaurants</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Contact Us</Link>
        </nav>
      </header>

      <main style={{ padding: '2rem', maxWidth: '1200px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', color: '#d62828' }}>Welcome to LebEats 🇱🇧</h2>
          <p style={{ fontSize: '1.2rem', color: '#444' }}>
            Discover Lebanon — from breathtaking views to unforgettable bites.
          </p>
        </section>

        <section>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div
              style={{
                height: '250px',
                backgroundImage: 'url(https://source.unsplash.com/featured/?lebanon)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🗺️ Time to Discover?
            </div>

            <div
              style={{
                height: '250px',
                backgroundImage: 'url(https://source.unsplash.com/featured/?lebanese-food)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🍽️ Time to Eat?
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;