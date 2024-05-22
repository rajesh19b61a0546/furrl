import "./index.css";

import { FaBookmark } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
      <nav className="nav-container">
      <div>
        <h1 className="heading1">#Vibe Page</h1>
        </div>
        <div className="container">
        <ul className="nav-menu">
            <li className="item"><FaBookmark /></li>
          <li className="item"><FaShoppingBag/></li>
        </ul>
        </div>
      </nav>
  );
};
export default Navbar;
