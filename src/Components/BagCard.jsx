import React from 'react';

function BagCard({ bag }) {
  return (
    <div className="bag-card" style={{ boxShadow: '2px 2px 10px #eee' }}>
      <img src={bag.image_url} alt={bag.name} />
      <h3 style={{ fontSize: '18px' }}>{bag.name}</h3>
      <p style={{ color: '#c00', fontWeight: 'bold' }}>KES {bag.price}</p>
    </div>
  );
}

export default BagCard;
