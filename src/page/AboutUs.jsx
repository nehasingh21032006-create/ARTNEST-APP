export default function About() {
  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About ARTNEST</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444' }}>
        ARTNEST is a dedicated marketplace built for original, handmade art across sculptures, paintings, sketches, digital art, ceramics, and mixed media[cite: 1].
      </p>

      <div style={{ marginTop: '30px' }}>
        <h2>Why ARTNEST?</h2>
        <ul style={{ lineHeight: '1.8', color: '#333' }}>
          <li><strong>Physical Art Metrics:</strong> Complete dimensions, weight, and material specs for sculptures[cite: 1].</li>
          <li><strong>Direct Commissioning:</strong> Request customized artwork directly from creators[cite: 1].</li>
          <li><strong>Verified Creators:</strong> Professional portfolios and authentic artwork guarantees[cite: 1].</li>
        </ul>
      </div>
    </div>
  );
}