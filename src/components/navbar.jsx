import { Link } from "react-router-dom";

function Navbar({ username, cartCount }) {

  return (
    <nav className="navbar">

      <h2>React Tasks</h2>

      <div className="right">

        <Link to="/">Store</Link>

        <Link to="/todo">Todo</Link>

        <span>{username}</span>

        <span className="cart">
          🛒 {cartCount}
        </span>

      </div>

    </nav>
  );
}

export default Navbar;