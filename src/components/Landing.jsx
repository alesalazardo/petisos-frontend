import "./../styles/landing.css";
import logo from "./../assets/petisos_logo.png";

export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing-container">
      <div className="landing-blur">
        <header className="landing-header">
          <img src={logo} alt="Petisos Logo" className="landing-logo" />
        </header>
        <section className="hero card">
          <h1>PETISOS</h1>
          <h2>
            🐾El segundo hogar de tu mascota.
          </h2>
          <div className="landing-buttons">
            <button
              className="btn-primary"
              onClick={() => onNavigate("register")}
            >
              Crear una Cuenta
            </button>
            <button
              className="btn-primary"
              onClick={() => onNavigate("dashboard")}
            >
              Ver Panel Directo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
