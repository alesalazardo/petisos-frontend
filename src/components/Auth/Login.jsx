import { useNavigate } from "react-router-dom";
import "./../../styles/auth.css";
import patita from "./../../assets/pata.png";

export default function Login({ onSuccess, onNavigate }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(); // Redirige al dashboard tras autenticar
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-blur">
          <header className="auth-header">
            <img src={patita} alt="Patita" className="login-img" />
            <img src={patita} alt="Patita" className="login-img2" />
          </header>
          <section
            className="hero card">
            <h1>Iniciar Sesión</h1>
            <form
              onSubmit={handleSubmit}
              className="form-container"
            >
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
              <button type="submit" className="btn-secondary">
                Ingresar
              </button>
            </form>
            <p>
              ¿No tienes cuenta?{" "}
              <a href="#" onClick={() => navigate("/register")}>
                Regístrate aquí
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
