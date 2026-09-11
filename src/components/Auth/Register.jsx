export default function Register({ onSuccess, onNavigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="card" style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h3>Crear Cuenta</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit" className="btn-primary">Registrarse</button>
      </form>
      <p style={{ marginTop: '15px', fontSize: '0.9rem' }}>
        ¿Ya tienes cuenta? <a href="#" onClick={() => onNavigate('login')}>Inicia sesión</a>
      </p>
    </div>
  );
}