import React, { useEffect, useState } from 'react';
import './Main.css';

function Main() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const res = await fetch('http://localhost:8000/api/productos/destacados/'); // tu endpoint Django
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    }

    fetchProductos();
  }, []);

  return (
    <main className="main">
      {/* HERO */}
      <section className="hero">
        <h2>Bienvenido a Mi E-commerce</h2>
        <p>Encontrá los mejores productos al mejor precio</p>
        <button className="hero-btn">Ver Productos</button>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="productos">
        <h3>Productos destacados</h3>

        <div className="productos-grid">
          {productos.slice(0, 9).map((producto) => (
            <div key={producto.id} className="producto-card">
              <div className="producto-img">
                <img 
                src={producto.imagen ? `http://localhost:8000/${producto.imagen}` : 'https://via.placeholder.com/150'} 
                alt={producto.titulo} 
                />

              </div>
              <h4 className="producto-titulo">{producto.titulo}</h4>
              <p className='producto-descripcion'>{producto.descripcion}</p>
              <p className="producto-precio">${producto.precio}</p>
              
              <button className="producto-btn">Comprar</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
