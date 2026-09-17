import { useParams, Link } from "react-router-dom";
import { mockArtists } from "../data/artista";

function ArtistDetails() {
  const { id } = useParams();

  const artist = mockArtists.find((item) => item.id === id);

  if (!artist) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Artist Not Found</h1>
        <Link to="/artists">Back to Artists</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#faf8f3", minHeight: "100vh" }}>
      
      {/* Back Button */}
      <div style={{ padding: "30px 7%" }}>
        <Link
          to="/artists"
          style={{
            textDecoration: "none",
            color: "#a84f32",
            fontWeight: "500",
          }}
        >
          ← Back to Artists
        </Link>
      </div>

      {/* Artist Header */}
      <section
        style={{
          padding: "20px 7% 60px",
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Avatar */}
        <img
          src={artist.avatar}
          alt={artist.name}
          style={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />

        {/* Artist Information */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "48px",
                margin: 0,
                color: "#222",
              }}
            >
              {artist.name}
            </h1>

            {artist.verified && (
              <span
                style={{
                  backgroundColor: "#a84f32",
                  color: "white",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
              >
                ✓
              </span>
            )}
          </div>

          <p
            style={{
              fontSize: "20px",
              color: "#a84f32",
              marginTop: "12px",
            }}
          >
            {artist.specialization}
          </p>

          <p
            style={{
              maxWidth: "600px",
              color: "#555",
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            {artist.bio}
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong>{artist.followers.toLocaleString()}</strong>
              <p>Followers</p>
            </div>

            <div>
              <strong>★ {artist.rating}</strong>
              <p>Rating</p>
            </div>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "#a84f32",
                color: "white",
                border: "none",
                padding: "13px 25px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Follow Artist
            </button>

            <Link
              to={`/custom-art?artist=${artist.id}`}
              style={{
                backgroundColor: "transparent",
                color: "#a84f32",
                border: "1px solid #a84f32",
                padding: "12px 25px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Request Custom Art
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ padding: "20px 7% 80px" }}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "34px",
            color: "#222",
          }}
        >
          Portfolio
        </h2>

        <p style={{ color: "#666", marginBottom: "30px" }}>
          Explore {artist.name}'s selected works.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {artist.portfolioPreview.map((image, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              <img
                src={image}
                alt={`${artist.name} artwork ${index + 1}`}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ArtistDetails;