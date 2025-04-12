import React from 'react';

const restaurants = [
  {
    name: 'Urban Onion',
    description: 'Modern Lebanese fusion with a twist — don’t skip the avocado hummus.',
    image: 'https://source.unsplash.com/featured/?lebanese-food',
  },
  {
    name: 'Ciao Warma',
    description: 'Creative shawarma blends and bold garlic sauces in every bite.',
    image: 'https://source.unsplash.com/featured/?shawarma',
  },
  {
    name: 'Mad for Bread',
    description: 'Zaatar, cheese, and morning vibes. A breakfast manoushe paradise.',
    image: 'https://source.unsplash.com/featured/?manoushe',
  },
  {
    name: 'Phil & Will',
    description: 'Burger kings of Beirut with mouth-watering sweet potato fries.',
    image: 'https://source.unsplash.com/featured/?burger-lebanon',
  },
];

const cardStyle = {
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
};

const Home = () => {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🔥 Trending Eats in Lebanon</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {restaurants.map((rest, index) => (
          <div key={index} style={cardStyle}>
            <img src={rest.image} alt={rest.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>{rest.name}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{rest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;