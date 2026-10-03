import { Link, NavLink } from 'react-router-dom';
import './../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div>
        <h2>Petisos</h2>
      </div>

      {/* Enlaces de navegación utilizando React Router */}
      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Iniciar Sesión
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/register" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Registro
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;