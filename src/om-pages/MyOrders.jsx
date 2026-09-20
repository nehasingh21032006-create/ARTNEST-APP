const orders = [
  { id: "ART-1024", artwork: "Golden Silence", artist: "Elena Rostova", date: "12 Sep 2026", status: "Delivered", amount: "?18,500" },
  { id: "ART-1008", artwork: "Urban Dreams", artist: "Marcus Chen", date: "28 Aug 2026", status: "In Transit", amount: "?24,000" },
  { id: "ART-0992", artwork: "Ocean Memories", artist: "Sarah Wilson", date: "10 Aug 2026", status: "Delivered", amount: "?15,800" }
];

export default function MyOrders() {
  return (
    <div style={{ padding: "50px", maxWidth: "1000px", margin: "auto" }}>
      <h1>My Orders</h1>
      <p style={{ color: "#666" }}>Track your artwork purchases</p>

      <div style={{ marginTop: "30px" }}>
        {orders.map(order => (
          <div key={order.id} style={cardStyle}>
            <div>
              <small>{order.id}</small>
              <h2>{order.artwork}</h2>
              <p>{order.artist}</p>
              <p style={{ color: "#777" }}>Ordered on {order.date}</p>
            </div>

            <div style={{ textAlign: "right" }}>
              <strong>{order.amount}</strong>
              <p style={{
                padding: "8px 12px",
                background: order.status === "Delivered" ? "#e8f5e9" : "#fff3cd",
                borderRadius: "20px"
              }}>
                {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "25px",
  marginBottom: "18px",
  borderRadius: "15px",
  background: "white",
  boxShadow: "0 5px 20px rgba(0,0,0,.08)"
};
