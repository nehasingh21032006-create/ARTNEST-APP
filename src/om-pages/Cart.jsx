import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, title: "Golden Silence", artist: "Elena Rostova", price: 18500, qty: 1 },
    { id: 2, title: "Urban Dreams", artist: "Marcus Chen", price: 24000, qty: 1 }
  ]);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const remove = (id) => setItems(items.filter(x => x.id !== id));

  return (
    <div style={{ padding: "50px", maxWidth: "1100px", margin: "auto" }}>
      <h1>Shopping Cart</h1>

      <div style={{ marginTop: "30px" }}>
        {items.map(item => (
          <div key={item.id} style={rowStyle}>
            <div>
              <h3>{item.title}</h3>
              <p style={{ color: "#777" }}>{item.artist}</p>
            </div>

            <div>
              <b>?{item.price.toLocaleString()}</b>
              <button onClick={() => remove(item.id)} style={removeStyle}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div style={summaryStyle}>
        <h2>Order Summary</h2>
        <p>Items: {items.length}</p>
        <h2>Total: ?{total.toLocaleString()}</h2>
        <button
          onClick={() => alert("Checkout demo — payment integration can be added later.")}
          style={buttonStyle}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "25px",
  borderBottom: "1px solid #eee"
};

const summaryStyle = {
  marginTop: "30px",
  marginLeft: "auto",
  maxWidth: "350px",
  padding: "25px",
  background: "#fafafa",
  borderRadius: "12px"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#111",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const removeStyle = {
  marginLeft: "20px",
  padding: "8px 12px",
  background: "white",
  border: "1px solid #ddd",
  borderRadius: "5px"
};
