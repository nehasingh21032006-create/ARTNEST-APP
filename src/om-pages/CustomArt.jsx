import { useState } from "react";

export default function CustomArt() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: "50px", maxWidth: "850px", margin: "auto" }}>
      <h1 style={{ fontSize: "42px" }}>Create Your Custom Artwork</h1>
      <p style={{ color: "#666", fontSize: "18px" }}>
        Tell us what you imagine. Our artists will turn your idea into an original piece.
      </p>

      {submitted ? (
        <div style={successStyle}>
          <h2>? Request Submitted</h2>
          <p>Your custom artwork request has been received. An artist will contact you soon.</p>
        </div>
      ) : (
        <div style={cardStyle}>
          <label>Artwork Title</label>
          <input placeholder="e.g. Sunset Memories" style={inputStyle} />

          <label>Choose Art Style</label>
          <select style={inputStyle}>
            <option>Painting</option>
            <option>Portrait</option>
            <option>Abstract</option>
            <option>Sculpture</option>
            <option>Digital Art</option>
          </select>

          <label>Describe Your Idea</label>
          <textarea
            placeholder="Describe the artwork you want..."
            rows="6"
            style={inputStyle}
          />

          <label>Budget</label>
          <input placeholder="? 10,000 - ? 25,000" style={inputStyle} />

          <button onClick={() => setSubmitted(true)} style={buttonStyle}>
            Submit Artwork Request
          </button>
        </div>
      )}
    </div>
  );
}

const cardStyle = {
  marginTop: "30px",
  padding: "35px",
  borderRadius: "18px",
  background: "#fafafa",
  boxShadow: "0 8px 30px rgba(0,0,0,.08)",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const inputStyle = {
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "16px",
  marginBottom: "15px"
};

const buttonStyle = {
  background: "#111",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "8px",
  cursor: "pointer"
};

const successStyle = {
  marginTop: "30px",
  padding: "40px",
  background: "#eef8ee",
  borderRadius: "15px"
};
