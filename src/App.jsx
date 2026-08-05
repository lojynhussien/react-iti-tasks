import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Shoes", price: 1200 },
    { id: 2, name: "T-Shirt", price: 350 },
    { id: 3, name: "Pants", price: 600 },
    { id: 4, name: "Cap", price: 200 },
  ];

  return (
    <>
      <Navbar username="Lojyn" cartCount={cartCount} />

      <Home
        products={products}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </>
  );
}

export default App;