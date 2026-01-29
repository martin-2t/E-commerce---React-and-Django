import "./Producto.css";

function Producto({ product, onAddToCart }) {
  return (
    <div className="producto-card">
      <div className="producto-img">
        <img src={product.image} alt={product.name} />
      </div>

      <h4 className="producto-titulo">{product.name}</h4>

      <p className="producto-precio">${product.price}</p>

      {product.stock > 0 ? (
        <button
          className="producto-btn"
          onClick={() => onAddToCart(product)}
        >
          Agregar al carrito
        </button>
      ) : (
        <button className="producto-btn" disabled>
          Sin stock
        </button>
      )}
    </div>
  );
}

export default Producto;
