import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import "../../assets/css/header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headbar">
        <p>
          Luxury self care candle package to be delivered at your door. Join
          candle club
        </p>
      </div>

      <div className="menubar">
        <Nav className="menu">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/shop-mood">Shop Moods</Link></li>
          </ul>
        </Nav>

        <div className="logo">
          <span><Link to="">Shop The Scents</Link></span>
        </div>

        <div className="social_menu">
          <ul>
            <li className="m_none">
              <Link to="">
                <FavoriteIcon className="icon "></FavoriteIcon>
              </Link>
            </li>
            <li>
              <Link to="">
                <ShoppingBasketIcon className="icon"></ShoppingBasketIcon>
              </Link>
            </li>
            <li>
              <Link to="">
                <PersonIcon className="icon"></PersonIcon>
              </Link>
            </li>
            <li className="d_none">
              <Link to="">
                <MenuIcon className="icon "></MenuIcon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
