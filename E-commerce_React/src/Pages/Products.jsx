
import { useEffect, useState } from "react";
import Producto from "../components/product/Producto";
import "../components/product/Producto.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    console.log("Agregar:", product);
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <main className="main">
      <div className="hero">
        <h2>Productos</h2>
        <p>Descubrí todos nuestros productos disponibles</p>
      </div>

      <div className="productos">
        <h3>Nuestros productos</h3>

        <div className="productos-grid">
          {products.map((p) => (
            <Producto
              key={p.id}
              product={p}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
