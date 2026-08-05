import { useState } from "react";

function ProductCard({ product, cartCount, setCartCount }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (!added) {
      setCartCount(cartCount + 1);
      setAdded(true);
    } else {
      setCartCount(cartCount - 1);
      setAdded(false);
    }
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>

      <p>Price: {product.price} EGP</p>

      <button onClick={handleClick}>
        {added ? "Remove" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;