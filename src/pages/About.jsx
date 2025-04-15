import React from 'react';

const About = () => {
  return (
    <main style={{
      padding: '4rem 2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      <h2 style={{ textAlign: 'center', color: '#d62828', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
        About LebEats
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#444', textAlign: 'center' }}>
        🇱🇧 LebEats is your one-stop platform to discover and explore the best of Lebanon's food scene — from traditional dishes in mountain villages to the trendiest spots in Beirut.
      </p>
      <p style={{ fontSize: '1.1rem', marginTop: '1.5rem', color: '#555' }}>
        We’re here to connect locals and travelers with mouthwatering experiences across the country. Whether you're a foodie on a mission or a local chef with passion, LebEats gives every flavor a spotlight.
      </p>
      <p style={{ fontSize: '1.1rem', marginTop: '1rem', color: '#555' }}>
        Our mission is to put Lebanon’s culinary culture on the digital map — one dish, one restaurant, and one story at a time.
      </p>
    </main>
  );
};

export default About;
