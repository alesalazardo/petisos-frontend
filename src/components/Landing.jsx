export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h2>🐾 Petisos</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn-secondary" onClick={() => onNavigate("login")}>
            Iniciar Sesión
          </button>
          <button
            className="btn-primary"
            onClick={() => onNavigate("register")}
          >
            Registrarse
          </button>
        </div>
      </header>

      <section
        className="hero card"
        style={{ textAlign: "center", marginTop: "40px", padding: "40px" }}
      >
        <h1>Gestión Veterinaria Integral y Control de Tutores</h1>
        <p style={{ color: "var(--text-muted, #64748b)", margin: "20px 0" }}>
          Plataforma para administrar historiales de salud animal, seguimiento
          de mascotas e interacción con tutores.
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
