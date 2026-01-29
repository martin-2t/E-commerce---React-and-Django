import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onBuscar, user, onLogout }) {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Mi E-commerce</h1>
      </div>

      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/contact">Contacto</Link>
      </nav>

      <div className="header-right">
        <div className="header-busqueda">
          <input
            type="text"
            placeholder="Buscar productos..."
            onChange={(e) => onBuscar(e.target.value)}
          />
        </div>

        <div className="header-cart">🛒</div>

        {user ? (
          <div className="header-user">
            Hola, {user.username}
            <button onClick={onLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="header-login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
