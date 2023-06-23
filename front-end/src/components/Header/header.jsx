import logo from "../../images/instagram_logo.svg";
import "./header.css";
import { Link } from "react-router-dom"


function Header() {
  return (
    <header id="header">
      <div id="logo">
      <img src={logo} alt="" id="header-img" />
      <p id="text-logo">Instagram</p>
      </div>
      
      <p>Hello Bruno</p>
    </header>
  );
}

export default Header;