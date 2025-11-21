import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "../componentStyles/Navbar.css";


import { useSelector } from "react-redux";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate(`/products`);
    }
    setSearchQuery("");
  };
  return (
   
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-hamburger p-5 m-3" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon className="icon" />
          ) : (
            <MenuIcon className="icon" />
          )}
        </div>
        <div className="search-container"></div>
        <div className="navbar-logo ">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            {" "}
            <h3 className="logo-wrapper">
              <h2 className="logo-title">
                salem
                <span className="logo-ak">AK</span>
                mangoes
              </h2>
            </h3>
          </Link>
        </div>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* this the last three icons components*/}
        <div className="navbar-icons">
        

          <div className="search-container">
            <div className="cart-container">
              <Link to="/cart">
                <ShoppingCartIcon className="icon" />
                <span className="cart-badge">{cartItems.length}</span>
              </Link>
            </div>
          </div>

          <div className="search-container">
            <div className="cart-container2">
              {!isAuthenticated && (
                <Link to="/register">
                  <PersonAddIcon className="icon" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>

  
   
   
  );
}

export default Navbar;
