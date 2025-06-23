import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BagDetails() {
  const { id } = useParams();
  const [bag, setBag] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/bags/${id}`)
      .then(res => res.json())
      .then(data => setBag(data))
      .catch(err => console.error('Error fetching bag:', err));
  }, [id]);

  if (!bag) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{bag.name}</h2>
      <img src={bag.image_url} alt={bag.name} style={{ width: '300px' }} />
      <p style={{ fontSize: '20px', color: '#555' }}>KES {bag.price}</p>
      <p>{bag.description}</p>
    </div>
  );
}

export default BagDetails;
