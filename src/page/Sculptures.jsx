import { useState } from 'react';
import { mockArtworks } from '../data/artworks';

export default function Sculptures() {
  const [selectedMaterial, setSelectedMaterial] = useState('All');

  const sculptures = mockArtworks.filter(item => item.category === 'Sculpture');
  const filteredSculptures = selectedMaterial === 'All'
    ? sculptures
    : sculptures.filter(item => item.material === selectedMaterial);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sculptures Gallery</h2>

      {/* Material Filter Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {['All', 'Bronze', 'Wood', 'Clay', 'Stone'].map(material => (
          <button 
            key={material} 
            onClick={() => setSelectedMaterial(material)}
            style={{
              padding: '8px 16px',
              backgroundColor: selectedMaterial === material ? '#333' : '#eee',
              color: selectedMaterial === material ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {material}
          </button>
        ))}
      </div>

      {/* Sculpture Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredSculptures.map(item => (
          <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3 style={{ margin: '10px 0 5px' }}>{item.title}</h3>
            <p style={{ margin: '0 0 5px', color: '#666' }}>By {item.artist}</p>
            <p><strong>Material:</strong> {item.material}</p>
            <p><strong>Dimensions:</strong> {item.dimensions}</p>
            <p><strong>Weight:</strong> {item.weight}</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}