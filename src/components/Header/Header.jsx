import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo-marvel" />
      </Link>
      <nav>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/comics">COMICS</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGNUP</Link>
      </nav>
    </header>
  );
};

export default Header;
