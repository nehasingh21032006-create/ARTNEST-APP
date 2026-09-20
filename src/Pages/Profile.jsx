import { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('wishlist');

  // Sample user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    role: 'Art Collector',
    wishlist: [
      { id: 1, title: 'Bronze Thinker Replica', category: 'Sculpture', price: 450 }
    ],
    orders: [
      { id: 'ORD-9921', item: 'Aura of Serenity', price: 320, status: 'Delivered', date: '2026-02-10' }
    ],
    commissions: [
      { id: 'REQ-104', artist: 'Elena Rostova', details: 'Custom 20cm Clay Figurine', status: 'In Progress' }
    ]
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Profile Header */}
      <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '20px', marginBottom: '20px' }}>
        <h2>{user.name}</h2>
        <p style={{ color: '#666', margin: 0 }}>{user.email} • {user.role}</p>
      </div>

      {/* Tabs Bar */}
      <div style={{ display: 'flex', gap: '15px', borderBottom: '20px', marginBottom: '20px' }}>
        {['wishlist', 'orders', 'commissions', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderBottom: activeTab === tab ? '3px solid #000' : 'none',
              background: 'transparent',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              textTransform: 'capitalize',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'wishlist' && (
          <div>
            <h3>Saved Items</h3>
            {user.wishlist.map(item => (
              <div key={item.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '6px', marginBottom: '10px' }}>
                <h4 style={{ margin: '0 0 5px' }}>{item.title}</h4>
                <p style={{ margin: 0, color: '#666' }}>{item.category} — ${item.price}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'orders' && (
          <div>
            <h3>Order History</h3>
            {user.orders.map(order => (
              <div key={order.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '6px', marginBottom: '10px' }}>
                <strong style={{ display: 'block' }}>Order #{order.id}</strong>
                <span>{order.item} — ${order.price}</span>
                <p style={{ margin: '5px 0 0', fontSize: '0.85rem', color: 'green' }}>Status: {order.status} ({order.date})</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'commissions' && (
          <div>
            <h3>Custom Artwork Requests</h3>
            {user.commissions.map(req => (
              <div key={req.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '6px', marginBottom: '10px' }}>
                <strong>Request for {req.artist}</strong>
                <p style={{ margin: '5px 0' }}>{req.details}</p>
                <span style={{ fontSize: '0.85rem', color: '#d97706' }}>Status: {req.status}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h3>Account Settings</h3>
            <p>Update personal information, notification preferences, and shipping details.</p>
          </div>
        )}
      </div>
    </div>
  );
}