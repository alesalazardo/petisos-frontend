export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing-container">
      <header className="landing-header">
      </header>

      <section
        className="hero card"
        style={{ textAlign: "center", marginTop: "40px", padding: "40px" }}
      >
        <h1>PETISOS</h1>
        <p style={{ color: "var(--text-muted, #64748b)", margin: "20px 0" }}>
          🐾El segundo hogar de tu mascota.🐾
        </p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <button
            className="btn-primary"
            onClick={() => onNavigate("register")}
          >
            Crear una Cuenta
          </button>
          <button
            className="btn-secondary"
            onClick={() => onNavigate("dashboard")}
          >
            Ver Panel Directo
          </button>
        </div>
      </section>
    </div>
  );
}
