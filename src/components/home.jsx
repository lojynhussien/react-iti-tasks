import ProductCard from "./ProductCard";

function Home({ products, cartCount, setCartCount }) {
  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      ))}
    </div>
  );
}

export default Home;