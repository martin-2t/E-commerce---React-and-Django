import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Links rápidos */}
        <div className="footer-links">
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
          <a href="#">Políticas</a>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a href="#">🐦</a>
          <a href="#">📘</a>
          <a href="#">📸</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mi E-commerce. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
