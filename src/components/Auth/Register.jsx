import { useNavigate } from "react-router-dom";
import "./../../styles/auth.css";
import orejitas from './../../assets/orejitas.png';

export default function Register({ onSuccess, onNavigate }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <>
      <div className="auth-container">
        <img src={orejitas} alt="Orejas de gato" className="register-img" />
        <div className="card">
          <h3 className="register-title">Crear Cuenta</h3>
          <form onSubmit={handleSubmit} className="form-container">
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit" className="btn-secondary">
              Registrarse
            </button>
          </form>
          <p>
            ¿Ya tienes cuenta?{" "}
            <a href="#" onClick={() => navigate("/login")}>
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
