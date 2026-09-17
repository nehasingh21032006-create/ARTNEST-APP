import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const artists = {
  "1": {
    name: "Aaradhya Sharma",
    role: "Sculptor",
    location: "New Delhi, India",
    followers: "124",
    following: "12",
    rating: "4.8",

    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=90",

    cover:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=2000&q=90",

    bio:
      "I am a sculptor based in New Delhi, inspired by nature, human emotions and the beauty of imperfect forms. My work explores the relationship between people, memories and the spaces around us.",

    secondaryBio:
      "Every piece is developed with a focus on material, proportion and emotion. The goal is not simply to create something beautiful, but something that becomes meaningful to the person who owns it.",

    specialties: [
      "Stone Sculpture",
      "Wood Art",
      "Abstract",
      "Figurative",
    ],

    portfolio: [
      {
        title: "The Silent Guardian",
        category: "Sculpture",
        price: "₹18,500",
        image:
          "https://images.unsplash.com/photo-1708570318882-3f9b91da0ca7?auto=format&fit=crop&w=1400&q=92",
      },
      {
        title: "Eternal Flow",
        category: "Sculpture",
        price: "₹24,000",
        image:
          "https://images.unsplash.com/photo-1746960645712-2e6c382c5ae3?auto=format&fit=crop&w=1400&q=92",
      },
      {
        title: "Natural Harmony",
        category: "Sculpture",
        price: "₹16,000",
        image:
          "https://images.unsplash.com/photo-1759803529014-6616e978d0ba?auto=format&fit=crop&w=1400&q=92",
      },
      {
        title: "The Thinking Man",
        category: "Sculpture",
        price: "₹21,500",
        image:
          "https://images.unsplash.com/photo-1759994984209-e6dc81ecc38c?auto=format&fit=crop&w=1400&q=92",
      },
    ],
  },
};


const specialtyImages = {
  "Stone Sculpture":
    "https://images.unsplash.com/photo-1708570318882-3f9b91da0ca7?auto=format&fit=crop&w=1000&q=90",
  "Wood Art":
    "https://images.unsplash.com/photo-1746960645712-2e6c382c5ae3?auto=format&fit=crop&w=1000&q=90",
  "Abstract":
    "https://images.unsplash.com/photo-1759803529014-6616e978d0ba?auto=format&fit=crop&w=1000&q=90",
  "Figurative":
    "https://images.unsplash.com/photo-1759994984209-e6dc81ecc38c?auto=format&fit=crop&w=1000&q=90",
};

export default function ArtistDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const artist = artists[id] || artists["1"];

  const [activeTab, setActiveTab] = useState("about");
  const [following, setFollowing] = useState(false);
  const [savedWorks, setSavedWorks] = useState([]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showRequest, setShowRequest] = useState(false);

  const toggleSave = (title) => {
    setSavedWorks((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="artist-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="artist-hero">
        <div className="hero-container">

          <div className="breadcrumb">
            <button onClick={() => navigate("/")}>Home</button>
            <span>/</span>
            <button onClick={() => navigate("/artists")}>Artists</button>
            <span>/</span>
            <span>{artist.name}</span>
          </div>

          <div className="hero-image">

            <img
              src={artist.cover}
              alt={`${artist.name} cover`}
              className="hero-cover"
            />

            <div className="hero-dark"></div>

            <div className="hero-grain"></div>

            <div className="verified">
              <span></span>
              VERIFIED ARTNEST ARTIST
            </div>

            <div className="original-art">
              <div className="original-symbol">✦</div>

              <div>
                <strong>Original Art</strong>
                <small>One of a kind pieces</small>
              </div>
            </div>

            <div className="hero-content">

              <div className="hero-kicker">
                ORIGINAL ART <i>•</i> INDEPENDENT ARTIST
              </div>

              <h1>{artist.name}</h1>

              <p>
                Original works created with craftsmanship,
                <br />
                emotion and intention.
              </p>

            </div>

            <button
              className="hero-button"
              onClick={() => {
                setActiveTab("portfolio");
                setTimeout(() => scrollToSection("portfolio"), 50);
              }}
            >
              <span>Explore Collection</span>
              <b>↗</b>
            </button>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROFILE
      ====================================================== */}

      <section className="profile-section">

        <div className="profile-container">

          <div className="portrait-wrap">

            <img
              src={artist.profile}
              alt={artist.name}
              className="portrait"
            />

            <div className="portrait-check">✓</div>

          </div>

          <div className="profile-information">

            <div className="profile-location">
              {artist.role}
              <span>•</span>
              {artist.location}
            </div>

            <h2>{artist.name}</h2>

            <p className="profile-intro">
              Independent artist creating expressive works that connect
              traditional craftsmanship with contemporary ideas.
            </p>

            <div className="statistics">

              <div>
                <strong>{artist.followers}</strong>
                <span>FOLLOWERS</span>
              </div>

              <div>
                <strong>{artist.following}</strong>
                <span>FOLLOWING</span>
              </div>

              <div>
                <strong>{artist.rating}</strong>
                <span>RATING</span>
              </div>

              <div>
                <strong>{artist.portfolio.length}</strong>
                <span>ARTWORKS</span>
              </div>

            </div>

          </div>

          <div className="profile-actions">

            <button
              className={`follow ${following ? "is-following" : ""}`}
              onClick={() => setFollowing(!following)}
            >
              {following ? "✓ Following" : "+ Follow"}
            </button>

            <button
              className="share"
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert("Profile link copied.");
              }}
            >
              ↗
            </button>

          </div>

        </div>

        {/* NAVIGATION TABS */}

        <div className="tabs-container">

          <div className="tabs">

            <button
              className={activeTab === "about" ? "active" : ""}
              onClick={() => {
                setActiveTab("about");
                scrollToSection("about");
              }}
            >
              About
            </button>

            <button
              className={activeTab === "portfolio" ? "active" : ""}
              onClick={() => {
                setActiveTab("portfolio");
                scrollToSection("portfolio");
              }}
            >
              Portfolio <span>{artist.portfolio.length}</span>
            </button>

            <button
              className={activeTab === "collections" ? "active" : ""}
              onClick={() => setActiveTab("collections")}
            >
              Collections
            </button>

            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      {(activeTab === "about" ||
        activeTab === "collections" ||
        activeTab === "reviews") && (

        <section className="about-section" id="about">

          <div className="section-index">
            <span>01</span>
          </div>

          <div className="section-main">

            <div className="section-heading">

              <div>
                <small>THE STORY</small>
                <h2>About the Artist</h2>
              </div>

              <div className="heading-line"></div>

            </div>

            <div className="about-layout">

              <div className="about-copy">

                <p className="about-lead">
                  {artist.bio}
                </p>

                <p className="about-small">
                  {artist.secondaryBio}
                </p>

              </div>

              <div className="artist-details">

                <div className="details-title">
                  ARTIST DETAILS
                </div>

                <div className="detail-item">
                  <span>Specialization</span>
                  <strong>{artist.role}</strong>
                </div>

                <div className="detail-item">
                  <span>Based in</span>
                  <strong>{artist.location}</strong>
                </div>

                <div className="detail-item">
                  <span>Available works</span>
                  <strong>{artist.portfolio.length} artworks</strong>
                </div>

                <div className="detail-item">
                  <span>Artist rating</span>
                  <strong>★ {artist.rating}</strong>
                </div>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          SPECIALTIES
      ====================================================== */}

      {activeTab === "about" && (

        <section className="specialties-section">

          <div className="section-index">
            <span>02</span>
          </div>

          <div className="section-main">

            <div className="section-heading specialty-heading">

              <div>
                <small>CREATIVE PRACTICE</small>
                <h2>Specialties</h2>
              </div>

            </div>

            <div className="specialties-grid">

              {artist.specialties.map((item, index) => (

                <div
                  className="specialty"
                  key={item}
                >
                  <img
                    className="specialty-image"
                    src={specialtyImages[item]}
                    alt={item}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="specialty-overlay"></div>

                  <div className="specialty-top">

                    <span>0{index + 1}</span>

                    <b>✦</b>

                  </div>

                  <h3>{item}</h3>

                  <div className="specialty-circle">
                    ↗
                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          PORTFOLIO
      ====================================================== */}

      {(activeTab === "about" ||
        activeTab === "portfolio") && (

        <section
          className="portfolio-section"
          id="portfolio"
        >

          <div className="section-index">
            <span>03</span>
          </div>

          <div className="section-main">

            <div className="portfolio-heading">

              <div>
                <small>SELECTED WORKS</small>
                <h2>Portfolio</h2>
              </div>

              <button
                className="view-all"
                onClick={() => setActiveTab("portfolio")}
              >
                View all artwork
                <span>⟶</span>
              </button>

            </div>

            <div className="portfolio-grid">

              {artist.portfolio.map((work, index) => (

                <article
                  className="art-card"
                  key={work.title}
                >

                  <div
                    className="art-visual"
                    onClick={() => setSelectedArtwork(work)}
                  >

                    <img
                      src={work.image}
                      alt={work.title}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=90";
                      }}
                    />

                    <div className="image-shade"></div>

                    <span className="art-number">
                      0{index + 1}
                    </span>

                    <button
                      className={`heart ${
                        savedWorks.includes(work.title)
                          ? "saved"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(work.title);
                      }}
                    >
                      {savedWorks.includes(work.title)
                        ? "♥"
                        : "♡"}
                    </button>

                    <div className="quick-view">
                      Quick view
                      <span>↗</span>
                    </div>

                  </div>

                  <div className="art-information">

                    <div className="art-category">
                      {work.category}
                    </div>

                    <div className="title-price">

                      <h3>{work.title}</h3>

                      <strong>{work.price}</strong>

                    </div>

                    <div className="art-bottom">

                      <span>Original artwork</span>

                      <button
                        onClick={() =>
                          alert(
                            `${work.title} added to cart.`
                          )
                        }
                      >
                        Add to Cart <b>+</b>
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          COLLECTIONS
      ====================================================== */}

      {activeTab === "collections" && (

        <section className="extra-section">

          <small>CURATED COLLECTION</small>

          <h2>Works with a story.</h2>

          <p>
            Explore original works created with intention,
            craftsmanship and a distinct artistic voice.
          </p>

          <button
            className="black-button"
            onClick={() => setActiveTab("portfolio")}
          >
            Explore artworks ↗
          </button>

        </section>

      )}

      {/* =====================================================
          REVIEWS
      ====================================================== */}

      {activeTab === "reviews" && (

        <section className="extra-section reviews">

          <small>COLLECTOR NOTES</small>

          <h2>What collectors say.</h2>

          <div className="review-grid">

            <div>
              <span>★★★★★</span>
              <p>
                "The craftsmanship and emotion behind the
                work are exceptional."
              </p>
              <small>PRIVATE COLLECTOR</small>
            </div>

            <div>
              <span>★★★★★</span>
              <p>
                "A beautiful piece that feels completely
                personal."
              </p>
              <small>ARTNEST COLLECTOR</small>
            </div>

            <div>
              <span>★★★★★</span>
              <p>
                "Discovering the artist made the experience
                even more meaningful."
              </p>
              <small>CONTEMPORARY ART BUYER</small>
            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="artist-cta">

        <div>

          <small>WORK WITH THE ARTIST</small>

          <h2>
            Have an idea for a custom piece?
          </h2>

          <p>
            Bring your vision to life with a personalized
            artwork created by {artist.name}.
          </p>

        </div>

        <button
          onClick={() => setShowRequest(true)}
        >
          Request Custom Artwork
          <span>↗</span>
        </button>

      </section>

      {/* =====================================================
          ARTWORK MODAL
      ====================================================== */}

      {selectedArtwork && (

        <div
          className="modal-background"
          onClick={() => setSelectedArtwork(null)}
        >

          <div
            className="art-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close"
              onClick={() => setSelectedArtwork(null)}
            >
              ×
            </button>

            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
            />

            <div className="modal-content">

              <small>{selectedArtwork.category}</small>

              <h2>{selectedArtwork.title}</h2>

              <strong>
                {selectedArtwork.price}
              </strong>

              <p>
                An original artwork created by{" "}
                {artist.name}.
              </p>

              <button
                className="black-button full"
                onClick={() => {
                  alert(
                    `${selectedArtwork.title} added to cart.`
                  );
                  setSelectedArtwork(null);
                }}
              >
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          CUSTOM ART MODAL
      ====================================================== */}

      {showRequest && (

        <div
          className="modal-background"
          onClick={() => setShowRequest(false)}
        >

          <div
            className="request-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close"
              onClick={() => setShowRequest(false)}
            >
              ×
            </button>

            <small>CUSTOM COMMISSION</small>

            <h2>
              Create something personal.
            </h2>

            <p>
              Tell {artist.name} what you have in mind.
            </p>

            <label>Your idea</label>

            <textarea
              rows="5"
              placeholder="Describe your artwork idea..."
            />

            <label>Budget</label>

            <select>
              <option>Select budget range</option>
              <option>₹10,000 – ₹25,000</option>
              <option>₹25,000 – ₹50,000</option>
              <option>₹50,000+</option>
            </select>

            <button
              className="black-button full"
              onClick={() => {
                alert("Request submitted successfully!");
                setShowRequest(false);
              }}
            >
              Submit Request
            </button>

          </div>

        </div>

      )}

      {/* =====================================================
          COMPLETE PAGE STYLING
      ====================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .artist-page {
          --bg: #f4f1eb;
          --paper: #ffffff;
          --ink: #171512;
          --muted: #756f67;
          --light-muted: #9b9388;
          --line: #dcd6cc;
          --accent: #9b6945;

          min-height: 100vh;
          background: var(--bg);
          color: var(--ink);

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          overflow-x: hidden;
        }

        .artist-page button {
          font-family: inherit;
        }

        /* =========================
           HERO
        ========================== */

        .artist-hero {
          padding: 25px 4vw 0;
          background: var(--bg);
        }

        .hero-container {
          width: 100%;
          max-width: 1680px;
          margin: auto;
        }

        .breadcrumb {
          height: 45px;
          display: flex;
          align-items: center;
          gap: 10px;

          color: #8a837a;
          font-size: 11px;
        }

        .breadcrumb button {
          border: 0;
          background: transparent;
          padding: 0;

          color: inherit;
          cursor: pointer;
        }

        .breadcrumb button:hover {
          color: var(--ink);
        }

        .hero-image {
          height: min(650px, 52vw);
          min-height: 520px;

          position: relative;
          overflow: hidden;

          border-radius: 3px;

          box-shadow:
            0 30px 70px rgba(30, 24, 18, .14),
            0 8px 25px rgba(30, 24, 18, .08);
        }

        .hero-cover {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          transition:
            transform 1.2s cubic-bezier(.2,.7,.2,1);
        }

        .hero-image:hover .hero-cover {
          transform: scale(1.035);
        }

        .hero-dark {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(8,7,5,.76) 0%,
              rgba(8,7,5,.40) 43%,
              rgba(8,7,5,.08) 100%
            ),
            linear-gradient(
              0deg,
              rgba(0,0,0,.70),
              transparent 52%
            );
        }

        .hero-grain {
          position: absolute;
          inset: 0;

          opacity: .09;

          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E");

          pointer-events: none;
        }

        .verified {
          position: absolute;
          top: 38px;
          left: 42px;

          display: flex;
          align-items: center;
          gap: 9px;

          padding: 13px 17px;

          color: white;
          border: 1px solid rgba(255,255,255,.32);
          background: rgba(15,13,11,.25);

          backdrop-filter: blur(12px);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .verified span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d49a69;
        }

        .original-art {
          position: absolute;

          top: 38px;
          right: 42px;

          display: flex;
          align-items: center;
          gap: 13px;

          padding: 15px 19px;

          background: rgba(255,255,255,.96);

          box-shadow:
            0 20px 45px rgba(0,0,0,.18);
        }

        .original-symbol {
          width: 39px;
          height: 39px;

          border-radius: 50%;

          display: grid;
          place-items: center;

          background: #eee7dc;
          color: var(--accent);

          font-size: 17px;
        }

        .original-art strong,
        .original-art small {
          display: block;
        }

        .original-art strong {
          font-size: 12px;
          margin-bottom: 4px;
        }

        .original-art small {
          color: #918a81;
          font-size: 9px;
        }

        .hero-content {
          position: absolute;

          left: 52px;
          bottom: 72px;

          color: white;
        }

        .hero-kicker {
          font-size: 10px;
          font-weight: 700;

          letter-spacing: 2.5px;

          color: rgba(255,255,255,.78);
        }

        .hero-kicker i {
          margin: 0 8px;
          color: #d39a68;
        }

        .hero-content h1 {
          margin: 15px 0 12px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(55px, 6vw, 92px);

          font-weight: 400;
          line-height: .93;

          letter-spacing: -4px;

          color: white;

          text-shadow:
            0 5px 30px rgba(0,0,0,.22);
        }

        .hero-content p {
          margin: 0;

          color: rgba(255,255,255,.77);

          font-size: 13px;
          line-height: 1.65;
        }

        .hero-button {
          position: absolute;

          right: 42px;
          bottom: 42px;

          min-width: 190px;

          padding: 19px 21px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          border: 0;

          background: white;
          color: var(--ink);

          cursor: pointer;

          transition: .3s ease;

          box-shadow:
            0 15px 35px rgba(0,0,0,.18);
        }

        .hero-button:hover {
          transform: translateY(-5px);
          box-shadow:
            0 22px 45px rgba(0,0,0,.25);
        }

        .hero-button span {
          font-size: 11px;
        }

        .hero-button b {
          font-size: 17px;
          font-weight: 400;
        }

        /* =========================
           PROFILE
        ========================== */

        .profile-section {
          background: white;
        }

        .profile-container {
          width: min(1280px, 90%);
          min-height: 300px;

          margin: auto;

          position: relative;

          display: grid;
          grid-template-columns: 175px minmax(0, 1fr) auto;

          column-gap: 46px;

          padding-bottom: 35px;
        }

        .portrait-wrap {
          width: 175px;
          height: 175px;

          position: relative;

          margin-top: -72px;

          z-index: 5;
        }

        .portrait {
          width: 175px;
          height: 175px;

          object-fit: cover;

          border-radius: 50%;

          border: 7px solid white;

          box-shadow:
            0 20px 45px rgba(0,0,0,.20);
        }

        .portrait-check {
          position: absolute;

          right: 5px;
          bottom: 7px;

          width: 27px;
          height: 27px;

          border-radius: 50%;

          display: grid;
          place-items: center;

          background: var(--ink);
          color: white;

          border: 3px solid white;

          font-size: 11px;
        }

        .profile-information {
          padding-top: 31px;
        }

        .profile-location {
          display: flex;
          gap: 9px;

          color: var(--accent);

          font-size: 14px;
        }

        .profile-location span {
          color: #aaa197;
        }

        .profile-information h2 {
          margin: 8px 0 10px;

          font-family: Georgia, serif;
          font-weight: 400;

          font-size: 44px;
          line-height: 1;

          letter-spacing: -2px;
        }

        .profile-intro {
          max-width: 700px;

          margin: 0;

          color: #777067;

          font-size: 15px;
          line-height: 1.7;
        }

        .statistics {
          display: flex;
          margin-top: 27px;
        }

        .statistics > div {
          min-width: 105px;

          padding:
            0 22px;

          border-right: 1px solid var(--line);
        }

        .statistics > div:first-child {
          padding-left: 0;
        }

        .statistics > div:last-child {
          border: 0;
        }

        .statistics strong {
          display: block;

          font-family: Georgia, serif;
          font-weight: 400;

          font-size: 29px;
        }

        .statistics span {
          display: block;

          margin-top: 6px;

          color: #968e84;

          font-size: 11px;

          letter-spacing: 1.5px;
        }

        .profile-actions {
          display: flex;
          gap: 8px;

          padding-top: 30px;
        }

        .follow {
          width: 125px;
          height: 43px;

          border: 1px solid var(--ink);

          background: var(--ink);
          color: white;

          cursor: pointer;

          font-size: 11px;

          transition: .25s ease;
        }

        .follow:hover {
          transform: translateY(-2px);
          background: #38342f;
        }

        .follow.is-following {
          background: #76563e;
          border-color: #76563e;
        }

        .share {
          width: 43px;
          height: 43px;

          border: 1px solid var(--line);

          background: white;

          cursor: pointer;

          font-size: 16px;

          transition: .25s ease;
        }

        .share:hover {
          background: var(--bg);
        }

        /* =========================
           TABS
        ========================== */

        .tabs-container {
          width: min(1280px, 90%);

          margin: auto;

          border-top: 1px solid var(--line);
        }

        .tabs {
          height: 63px;

          display: flex;
          align-items: stretch;

          gap: 38px;
        }

        .tabs button {
          position: relative;

          border: 0;
          background: transparent;

          color: #817970;

          cursor: pointer;

          padding: 0;

          font-size: 11px;
        }

        .tabs button:hover {
          color: var(--ink);
        }

        .tabs button.active {
          color: var(--ink);
          font-weight: 600;
        }

        .tabs button.active::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 2px;

          background: var(--ink);
        }

        .tabs span {
          color: var(--accent);
          margin-left: 3px;
        }

        /* =========================
           COMMON SECTIONS
        ========================== */

        .about-section,
        .specialties-section,
        .portfolio-section {
          width: min(1450px, 92%);

          margin: auto;

          display: grid;

          grid-template-columns: 80px 1fr;

          padding:
            90px 0;
        }

        .section-index {
          padding-top: 5px;
        }

        .section-index span {
          color: var(--accent);

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 2px;
        }

        .section-main {
          min-width: 0;
        }

        .section-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          margin-bottom: 45px;
        }

        .section-heading small,
        .portfolio-heading small {
          display: block;

          color: var(--accent);

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 2px;

          margin-bottom: 11px;
        }

        .section-heading h2,
        .portfolio-heading h2 {
          margin: 0;

          font-family: Georgia, serif;
          font-weight: 400;

          font-size:
            clamp(42px, 4vw, 62px);

          letter-spacing: -2.5px;

          line-height: 1;
        }

        .heading-line {
          width: 38%;
          height: 1px;

          margin-top: 34px;

          background: var(--line);
        }

        /* =========================
           ABOUT
        ========================== */

        .about-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(350px, .85fr);

          gap: 100px;
        }

        .about-copy {
          max-width: 760px;
        }

        .about-lead {
          margin: 0;

          font-family: Georgia, serif;

          font-size:
            clamp(25px, 2.25vw, 34px);

          line-height: 1.42;

          color: #4d4943;
        }

        .about-small {
          max-width: 720px;

          margin: 35px 0 0;

          color: #7e776f;

          font-size: 16px;
          line-height: 1.8;
        }

        .artist-details {
          border-top: 1px solid var(--line);
        }

        .details-title {
          padding: 18px 0 5px;

          color: var(--accent);

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 2px;
        }

        .detail-item {
          min-height: 61px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-bottom: 1px solid var(--line);

          gap: 20px;
        }

        .detail-item span {
          color: #968e84;
          font-size: 14px;
        }

        .detail-item strong {
          font-size: 14px;
          font-weight: 500;

          text-align: right;
        }

        /* =========================
           SPECIALTIES
        ========================== */

        .specialties-section {
          padding-top: 10px;
          padding-bottom: 105px;
        }

        .specialties-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 13px;
        }


        .specialty {
          height: 235px;
          position: relative;
          padding: 24px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: #ddd7ce;
          isolation: isolate;
          cursor: pointer;
          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .specialty-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -3;
          filter: saturate(.88) contrast(1.05);
          transition:
            transform .6s cubic-bezier(.2,.7,.2,1),
            filter .6s ease;
        }

        .specialty-overlay {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(
              180deg,
              rgba(15,12,9,.08) 0%,
              rgba(15,12,9,.08) 35%,
              rgba(15,12,9,.72) 100%
            );
        }

        .specialty:hover {
          transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
          box-shadow: 0 24px 50px rgba(30,24,18,.18);
        }

        .specialty:hover .specialty-image {
          transform: scale(1.08);
          filter: saturate(1.05) contrast(1.08);
        }

        .specialty-top {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
        }

        .specialty-top span {
          color: rgba(255,255,255,.9);
          font-size: 11px;
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(0,0,0,.35);
        }

        .specialty-top b {
          color: #f0d1b3;
          font-size: 18px;
          font-weight: 400;
          text-shadow: 0 2px 10px rgba(0,0,0,.35);
        }

        .specialty h3 {
          position: absolute;
          left: 24px;
          bottom: 25px;
          margin: 0;
          max-width: calc(100% - 48px);
          font-family: Georgia, serif;
          font-size: 27px;
          line-height: 1.05;
          font-weight: 400;
          color: white;
          z-index: 2;
          text-shadow: 0 3px 18px rgba(0,0,0,.45);
        }

        .specialty-circle {
          position: absolute;
          width: 92px;
          height: 92px;
          right: -46px;
          bottom: -46px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          padding-left: 12px;
          padding-top: 12px;
          background: rgba(255,255,255,.16);
          color: white;
          font-size: 15px;
          z-index: 2;
          transition: .4s ease;
          backdrop-filter: blur(4px);
        }

        .specialty:hover .specialty-circle {
          transform: scale(1.25);
        }

        /* =========================
           PORTFOLIO
        ========================== */

        .portfolio-section {
          padding-top: 0;
          padding-bottom: 125px;
        }

        .portfolio-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          margin-bottom: 42px;
        }

        .view-all {
          display: flex;
          align-items: center;
          gap: 17px;

          border: 0;
          border-bottom: 1px solid var(--ink);

          background: transparent;

          padding:
            0 0 7px;

          cursor: pointer;

          font-size: 12px;
        }

        .view-all span {
          font-size: 17px;
        }

        .portfolio-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0,1fr));

          gap: 17px;
        }

        .art-card {
          background: white;

          border: 1px solid #ddd7ce;

          box-shadow:
            0 4px 0 rgba(0,0,0,.015);

          transition:
            transform .4s cubic-bezier(.2,.7,.2,1),
            box-shadow .4s ease;
        }

        .art-card:hover {
          transform:
            translateY(-10px)
            rotateX(1deg);

          box-shadow:
            0 28px 55px rgba(34,27,20,.15);
        }

        .art-visual {
          height: 440px;

          position: relative;

          overflow: hidden;

          cursor: pointer;

          background: #ddd8cf;
        }

        .art-visual img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;
          filter: saturate(1.12) contrast(1.06);
          image-rendering: auto;

          transition:
            transform .7s cubic-bezier(.2,.7,.2,1),
            filter .7s ease;
        }

        .art-card:hover .art-visual img {
          transform: scale(1.07);
        }

        .image-shade {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.18),
              transparent 28%,
              transparent 70%,
              rgba(0,0,0,.10)
            );

          pointer-events: none;
        }

        .art-number {
          position: absolute;

          top: 18px;
          left: 18px;

          color: white;

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 1px;

          text-shadow:
            0 2px 8px rgba(0,0,0,.5);
        }

        .heart {
          position: absolute;

          top: 15px;
          right: 15px;

          width: 41px;
          height: 41px;

          border: 0;

          border-radius: 50%;

          background: rgba(255,255,255,.94);

          cursor: pointer;

          font-size: 19px;

          color: #332e29;

          transition: .25s ease;
        }

        .heart:hover {
          transform: scale(1.12);
        }

        .heart.saved {
          color: #9b513c;
        }

        .quick-view {
          position: absolute;

          left: 50%;
          bottom: 18px;

          transform:
            translate(-50%, 20px);

          opacity: 0;

          min-width: 125px;

          padding: 13px 17px;

          background: white;

          display: flex;
          justify-content: space-between;

          box-shadow:
            0 12px 30px rgba(0,0,0,.22);

          font-size: 10px;

          transition: .35s ease;
        }

        .art-card:hover .quick-view {
          opacity: 1;

          transform:
            translate(-50%, 0);
        }

        .art-information {
          padding: 22px 19px 18px;
        }

        .art-category {
          color: #988f85;

          font-size: 11px;
          font-weight: 600;

          letter-spacing: 1.5px;

          text-transform: uppercase;
        }

        .title-price {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 15px;

          margin-top: 12px;
        }

        .title-price h3 {
          margin: 0;

          font-family: Georgia, serif;

          font-size: 21px;
          font-weight: 400;

          line-height: 1.3;
        }

        .title-price strong {
          white-space: nowrap;

          font-size: 13px;

          padding-top: 3px;
        }

        .art-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          margin-top: 26px;
        }

        .art-bottom > span {
          color: #999188;
          font-size: 11px;
        }

        .art-bottom button {
          padding: 10px 12px;

          border: 1px solid var(--line);

          background: white;

          cursor: pointer;

          font-size: 11px;

          transition: .25s ease;
        }

        .art-bottom button:hover {
          background: var(--ink);
          color: white;
          border-color: var(--ink);
        }

        .art-bottom button b {
          margin-left: 7px;
          font-size: 13px;
        }

        /* =========================
           EXTRA SECTIONS
        ========================== */

        .extra-section {
          width: min(1200px, 90%);

          margin: auto;

          padding:
            100px 0 150px;
        }

        .extra-section > small {
          color: var(--accent);

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 2px;
        }

        .extra-section h2 {
          margin: 14px 0;

          font-family: Georgia, serif;
          font-weight: 400;

          font-size: 60px;
          letter-spacing: -3px;
        }

        .extra-section > p {
          max-width: 600px;

          color: var(--muted);

          font-size: 13px;
          line-height: 1.8;
        }

        .black-button {
          margin-top: 20px;

          padding: 14px 20px;

          border: 0;

          background: var(--ink);
          color: white;

          cursor: pointer;

          font-size: 10px;

          transition: .25s ease;
        }

        .black-button:hover {
          transform: translateY(-2px);
          background: #35312c;
        }

        .review-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 15px;

          margin-top: 45px;
        }

        .review-grid > div {
          min-height: 220px;

          padding: 30px;

          background: white;

          border: 1px solid var(--line);
        }

        .review-grid > div > span {
          color: var(--accent);

          letter-spacing: 4px;

          font-size: 11px;
        }

        .review-grid p {
          font-family: Georgia, serif;

          font-size: 18px;
          line-height: 1.5;
        }

        .review-grid small {
          color: #999188;

          font-size: 8px;
          letter-spacing: 1.5px;
        }

        /* =========================
           CTA
        ========================== */

        .artist-cta {
          min-height: 290px;

          padding:
            65px 7vw;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 50px;

          background: #282622;
          color: white;
        }

        .artist-cta small {
          color: #bd875d;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 2px;
        }

        .artist-cta h2 {
          margin: 13px 0 9px;

          font-family: Georgia, serif;
          font-weight: 400;

          font-size:
            clamp(35px, 4vw, 56px);

          line-height: 1;

          letter-spacing: -2px;

          color: white;
        }

        .artist-cta p {
          color: #a8a29a;

          font-size: 12px;
        }

        .artist-cta > button {
          min-width: 220px;

          padding: 17px 20px;

          border: 0;

          background: white;
          color: var(--ink);

          cursor: pointer;

          display: flex;
          justify-content: space-between;

          transition: .3s ease;
        }

        .artist-cta > button:hover {
          transform: translateY(-5px);

          box-shadow:
            0 20px 40px rgba(0,0,0,.28);
        }

        /* =========================
           MODALS
        ========================== */

        .modal-background {
          position: fixed;

          inset: 0;

          z-index: 9999;

          display: grid;
          place-items: center;

          padding: 25px;

          background:
            rgba(13,11,9,.76);

          backdrop-filter: blur(8px);
        }

        .art-modal {
          width: min(900px,100%);

          max-height: 90vh;

          overflow: auto;

          position: relative;

          display: grid;

          grid-template-columns:
            1.1fr .9fr;

          background: var(--bg);

          box-shadow:
            0 40px 100px rgba(0,0,0,.4);
        }

        .art-modal > img {
          width: 100%;
          height: 100%;

          min-height: 500px;

          object-fit: cover;
        }

        .modal-content {
          padding: 50px;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .modal-content small {
          color: var(--accent);

          font-size: 9px;

          letter-spacing: 2px;
        }

        .modal-content h2 {
          font-family: Georgia, serif;

          font-size: 39px;

          font-weight: 400;

          margin: 12px 0;
        }

        .modal-content > strong {
          font-size: 18px;
        }

        .modal-content p {
          color: var(--muted);

          font-size: 12px;

          line-height: 1.7;

          margin:
            20px 0;
        }

        .close {
          position: absolute;

          right: 15px;
          top: 15px;

          width: 39px;
          height: 39px;

          border: 0;

          background: white;

          cursor: pointer;

          font-size: 23px;

          z-index: 4;
        }

        .request-modal {
          width: min(560px,100%);

          position: relative;

          padding: 48px;

          background: var(--bg);

          box-shadow:
            0 30px 80px rgba(0,0,0,.4);
        }

        .request-modal > small {
          color: var(--accent);

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 2px;
        }

        .request-modal h2 {
          margin: 12px 0;

          font-family: Georgia, serif;
          font-size: 42px;
          font-weight: 400;
          letter-spacing: -2px;
        }

        .request-modal p {
          color: var(--muted);

          font-size: 12px;
          line-height: 1.7;
        }

        .request-modal label {
          display: block;

          margin:
            22px 0 8px;

          color: #777068;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 1.5px;
        }

        .request-modal textarea,
        .request-modal select {
          width: 100%;

          padding: 14px;

          border: 1px solid var(--line);

          outline: none;

          background: white;

          font-family: inherit;

          font-size: 12px;
        }

        .request-modal textarea:focus,
        .request-modal select:focus {
          border-color: var(--ink);
        }

        .full {
          width: 100%;
        }

        .artist-page button:focus-visible,
        .artist-page textarea:focus-visible,
        .artist-page select:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        /* =========================
           RESPONSIVE
        ========================== */

        @media (max-width: 1100px) {

          .profile-container {
            grid-template-columns: 145px 1fr auto;
            gap: 25px;
          }

          .portrait,
          .portrait-wrap {
            width: 145px;
            height: 145px;
          }

          .portfolio-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .specialties-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .about-layout {
            gap: 50px;
          }

        }

        @media (max-width: 760px) {

          .artist-hero {
            padding:
              15px 16px 0;
          }

          .hero-image {
            min-height: 590px;
            height: 590px;
          }

          .verified {
            top: 22px;
            left: 22px;

            font-size: 8px;
            letter-spacing: 1.5px;
          }

          .original-art {
            top: 22px;
            right: 22px;
          }

          .original-art small {
            display: none;
          }

          .hero-content {
            left: 25px;
            bottom: 105px;
            right: 20px;
          }

          .hero-content h1 {
            font-size: 52px;
            letter-spacing: -2px;
          }

          .hero-button {
            right: 22px;
            bottom: 22px;
          }

          .profile-container {
            width: 90%;

            display: block;

            min-height: 0;

            padding-bottom: 25px;
          }

          .portrait-wrap {
            margin-top: -62px;
          }

          .profile-information {
            padding-top: 20px;
          }

          .profile-information h2 {
            font-size: 40px;
          }

          .profile-intro {
            font-size: 14px;
          }

          .statistics strong {
            font-size: 27px;
          }

          .statistics span {
            font-size: 10px;
          }

          .profile-actions {
            position: absolute;

            top: 22px;
            right: 0;

            padding: 0;
          }

          .statistics {
            overflow-x: auto;
          }

          .statistics > div {
            min-width: 95px;
          }

          .tabs-container {
            width: 90%;
          }

          .tabs {
            gap: 25px;

            overflow-x: auto;
          }

          .about-section,
          .specialties-section,
          .portfolio-section {
            display: block;

            width: 90%;

            padding:
              75px 0;
          }

          .section-index {
            margin-bottom: 13px;
          }

          .about-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .about-lead {
            font-size: 27px;
          }

          .about-small {
            font-size: 15px;
          }

          .detail-item span,
          .detail-item strong {
            font-size: 13px;
          }

          .specialties-grid,
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .art-visual {
            height: 460px;
          }

          .specialty {
            height: 250px;
          }

          .portfolio-heading {
            align-items: flex-start;
            gap: 20px;
          }

          .artist-cta {
            display: block;

            padding:
              55px 25px;
          }

          .artist-cta > button {
            width: 100%;
            margin-top: 30px;
          }

          .review-grid {
            grid-template-columns: 1fr;
          }

          .art-modal {
            grid-template-columns: 1fr;
          }

          .art-modal > img {
            min-height: 300px;
            height: 300px;
          }

          .modal-content {
            padding: 30px;
          }

          .request-modal {
            padding: 35px 25px;
          }

        }

      `}</style>
    </div>
  );
}