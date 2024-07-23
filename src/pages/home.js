import React from 'react';

function Home({ accommodations }) {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Kasa Home Page.</p>
      <h2>Liste des logements</h2>
      <ul>
        {accommodations.map((accommodation) => (
          <li key={accommodation.id}>
            <h3>{accommodation.title}</h3>
            <img src={accommodation.cover} alt={accommodation.title} />
            <p>{accommodation.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
