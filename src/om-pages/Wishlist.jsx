import { useState } from "react";

const artworks = [
  { id: 1, title: "Golden Silence", artist: "Elena Rostova", price: "?18,500", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Urban Dreams", artist: "Marcus Chen", price: "?24,000", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Ocean Memories", artist: "Sarah Wilson", price: "?15,800", image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=600&q=80" }
];

export default function Wishlist() {
  const [items, setItems] = useState(artworks);

  const remove = (id) => setItems(items.filter(x => x.id !== id));

  return (
    <div style={{ padding: "50px", maxWidth: "1100px", margin: "auto" }}>
      <h1>My Wishlist ?</h1>
      <p style={{ color: "#666" }}>{items.length} saved artworks</p>

      {items.length === 0 ? (
        <div style={emptyStyle}>Your wishlist is empty.</div>
      ) : (
        <div style={gridStyle}>
          {items.map(item => (
            <div key={item.id} style={cardStyle}>
              <img src={item.image} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
              <div style={{ padding: "18px" }}>
                <h3>{item.title}</h3>
                <p style={{ color: "#777" }}>{item.artist}</p>
                <strong>{item.price}</strong>
                <button onClick={() => remove(item.id)} style={removeStyle}>
                  Remove ?
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "25px",
  marginTop: "30px"
};

const cardStyle = {
  borderRadius: "15px",
  overflow: "hidden",
  background: "white",
  boxShadow: "0 5px 20px rgba(0,0,0,.1)"
};

const removeStyle = {
  display: "block",
  marginTop: "15px",
  border: "1px solid #ddd",
  background: "white",
  padding: "9px 15px",
  borderRadius: "6px",
  cursor: "pointer"
};

const emptyStyle = {
  padding: "80px",
  textAlign: "center",
  background: "#fafafa",
  marginTop: "30px"
};
