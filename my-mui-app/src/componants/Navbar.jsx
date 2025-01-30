import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  return <>
    <nav className="navbar">
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="/path-to-your-logo/logo.png"
            alt="Emp Home"
          />
        </Link>
      </div>
      <ul className="nav_bar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
        <li><Link to="/user-login">User Login</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
    </>
};

export default Navbar;
