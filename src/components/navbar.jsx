function Navbar({ username, cartCount }) {
  return (
    <nav className="navbar">
      <h2>My Store</h2>

      <div className="right">
        <span>{username}</span>

        <span className="cart">
           {cartCount}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;