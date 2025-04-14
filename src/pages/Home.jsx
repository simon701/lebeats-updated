import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/Snapinsta.app_video_GKa9kRDxIslC9Y0AAHtf543-OwRebq_EAAAF (1).mp4';
import discover from '../assets/Discover.png';
import eat from '../assets/Eat.png';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero-text');
      if (window.scrollY > 50) {
        hero.style.transform = 'translateY(-10px)';
        hero.style.opacity = '0.9';
      } else {
        hero.style.transform = 'translateY(0)';
        hero.style.opacity = '1';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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

      <section style={{
        height: '600px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff'
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -2
          }}
          src={backgroundVideo}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: -1
        }}></div>
        <div className="hero-text" style={{ transition: 'transform 0.4s ease, opacity 0.4s ease', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 6px rgba(0,0,0,0.6)' }}>
            Discover Lebanon's Flavors
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
            Welcome to LebEats — your gateway to the best restaurants, local eats, and food experiences across Lebanon 🇱🇧
          </p>
          <Link to="/restaurants">
            <button style={{
              marginTop: '2rem',
              padding: '0.8rem 1.6rem',
              backgroundColor: '#d62828',
              color: '#fff',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Explore Restaurants
            </button>
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: '#d62828' }}>What would you like to do?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            backgroundImage: src={discover},
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            height: '250px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.6rem',
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

          <div style={{
            backgroundImage: src={eat},
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            height: '250px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.6rem',
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
    </>
  );
};

export default Home;
