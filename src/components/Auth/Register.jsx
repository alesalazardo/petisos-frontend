import "./../../styles/auth.css";

export default function Register({ onSuccess, onNavigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-card">
          <h3>Crear Cuenta</h3>
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
            <a href="#" onClick={() => onNavigate("login")}>
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
