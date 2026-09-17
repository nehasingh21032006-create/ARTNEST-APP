import { useState } from 'react';
import { mockArtists } from '../data/artists';

export default function Artists() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredArtists = mockArtists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || artist.specialization === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Artist Directory</h2>

      {/* Search & Category Filter Controls */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search artists..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px 12px', width: '250px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <option value="All">All Specializations</option>
          <option value="Sculptor">Sculptors</option>
          <option value="Painter">Painters</option>
        </select>
      </div>

      {/* Artists Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredArtists.map(artist => (
          <div key={artist.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <img src={artist.avatar} alt={artist.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h3 style={{ margin: 0 }}>{artist.name} {artist.verified && '✓'}</h3>
                <span style={{ fontSize: '0.85rem', color: '#666' }}>{artist.specialization}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#444' }}>{artist.bio}</p>
            <p style={{ fontSize: '0.85rem' }}><strong>Followers:</strong> {artist.followers} | <strong>Rating:</strong> ★ {artist.rating}</p>
            
            {/* Portfolio Preview */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              {artist.portfolioPreview.map((img, index) => (
                <img key={index} src={img} alt="preview" style={{ width: '60px', height: '60px', borderRadius: '4px', objectFit: 'cover' }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}