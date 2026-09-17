import { mockCollections } from '../data/collections';

export default function Collections() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Curated Collections</h2>
      <p style={{ color: '#666', marginBottom: '25px' }}>Hand-selected art exhibitions curated by theme, style, and space.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
        {mockCollections.map(item => (
          <div key={item.id} style={{ border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', padding: '15px', background: '#fff' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', height: '180px', marginBottom: '15px' }}>
              {item.coverImages.map((img, idx) => (
                <img key={idx} src={img} alt="Collection artwork" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
              ))}
            </div>
            <h3 style={{ margin: '0 0 5px' }}>{item.title}</h3>
            <span style={{ fontSize: '0.85rem', color: '#888' }}>Curated by {item.curator} • {item.artworkCount} Items</span>
            <p style={{ fontSize: '0.9rem', color: '#444', marginTop: '10px' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}