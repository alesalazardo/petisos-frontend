import './../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Petisos</div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
