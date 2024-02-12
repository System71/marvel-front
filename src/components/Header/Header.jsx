import "./header.css";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Cookies from "js-cookie";

const Header = ({
  token,
  setToken,
  setFavoriteCharacters,
  setFavoriteComics,
}) => {
  const navigate = useNavigate();

  return (
    <header className="crawler">
      <Link to="/">
        <img src={logo} alt="logo-marvel" />
      </Link>
      <nav>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/comics">COMICS</Link>
        {token ? (
          <>
            <Link to="/favorites">MY FAVORITES</Link>
            <button
              onClick={() => {
                Cookies.remove("userToken");
                setToken("");
                setFavoriteCharacters([]);
                setFavoriteComics([]);
                navigate("/");
              }}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">SIGNUP</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
