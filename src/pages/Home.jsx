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

const Home = () => {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', color: '#d62828' }}>Welcome to LebEats 🇱🇧</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>
          Discover Lebanon's most delicious food spots — curated, loved, and recommended.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', borderBottom: '2px solid #d62828', display: 'inline-block' }}>🔥 Trending Eats</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          {restaurants.map((rest, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <img src={rest.image} alt={rest.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.3rem', color: '#222' }}>{rest.name}</h3>
                <p style={{ fontSize: '0.95rem', color: '#666' }}>{rest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', borderBottom: '2px solid #d62828', display: 'inline-block' }}>📍 Browse by City</h2>
        <p style={{ color: '#555', fontSize: '1rem', marginTop: '0.5rem' }}>
          Coming soon — filter restaurants by your favorite city like Beirut, Jounieh, Tripoli, and more!
        </p>
      </section>

      <section style={{ marginTop: '4rem', textAlign: 'center', padding: '2rem', backgroundColor: '#fcefe7', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#b22222' }}>📬 Get Notified</h2>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '1.5rem' }}>
          Enter your email to be the first to know when we launch new features & restaurants!
        </p>
        <form style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="you@example.com"
            style={{ padding: '0.5rem 1rem', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }}
          />
          <button
            type="submit"
            style={{ padding: '0.5rem 1.2rem', backgroundColor: '#d62828', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}
          >
            Notify Me
          </button>
        </form>
      </section>
    </main>
  );
};

export default Home;