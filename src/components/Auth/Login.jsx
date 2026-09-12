import "./../../styles/auth.css";
import patita from './../../assets/pata.png';

export default function Login({ onSuccess, onNavigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(); // Redirige al dashboard tras autenticar
  };

  return (
    <>
      <div className="auth-container">
      <img src={patita} alt="Patita" className="login-img" />
      <img src={patita} alt="Patita" className="login-img2" />

        <div
          className="card"
          style={{ maxWidth: "400px", margin: "40px auto" }}
        >
          <h3>Iniciar Sesión</h3>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit" className="btn-secondary">
              Ingresar
            </button>
          </form>
          <p style={{ marginTop: "15px", fontSize: "0.9rem" }}>
            ¿No tienes cuenta?{" "}
            <a href="#" onClick={() => onNavigate("register")}>
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
