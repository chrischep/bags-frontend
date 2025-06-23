import React, { useEffect, useState } from 'react';
import BagCard from '../Components/BagCard';
import { Link } from 'react-router-dom';

function Home() {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bags')
      .then(res => res.json())
      .then(data => setBags(data))
      .catch(err => console.error('Error fetching bags:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Bags</h2>
      <div className="bag-grid">
        {bags.map(bag => (
          <Link to={`/bag/${bag.id}`} key={bag.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <BagCard bag={bag} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
