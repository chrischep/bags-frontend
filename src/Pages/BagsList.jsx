import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BagCard from '../Components/BagCard';

function BagsList() {
  const [bags, setBags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
    const fetchBags = async () => {
      try {
        const res = await fetch(`http://localhost:3000/bags?query=${searchTerm}`);
        const data = await res.json();
        setBags(data);
      } catch (error) {
        console.error("Error fetching bags:", error);
      }
    };
        fetchBags();
  }, [searchTerm]);
  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Search by name or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />

<div className="bag-grid">
  {bags.map(bag => (
    <Link to={`/bags/${bag.id}`} key={bag.id} style={{ textDecoration: 'none' }}>
      <BagCard bag={bag} />
    </Link>
  ))}
</div>

    </div>
  );
}
export default BagsList;    