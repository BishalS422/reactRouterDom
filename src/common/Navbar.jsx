import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navStyle">
      <nav>
        <Link to="/product">Product</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </div>
  );
};

export default Navbar;
