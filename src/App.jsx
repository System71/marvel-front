import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import CharacterCard from "./pages/CharacterCard/CharacterCard";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Favorites from "./pages/Favorites/Favorites";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || "");
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [favoriteComics, setFavoriteComics] = useState([]);

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              token={token}
              setFavoriteCharacters={setFavoriteCharacters}
              setFavoriteComics={setFavoriteComics}
            />
          }
        />
        <Route path="/signup" element={<Signup setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/characters"
          element={
            <Characters
              token={token}
              favoriteCharacters={favoriteCharacters}
              setFavoriteCharacters={setFavoriteCharacters}
            />
          }
        />
        <Route path="/characters/:id" element={<CharacterCard />} />
        <Route
          path="/comics"
          element={
            <Comics
              token={token}
              favoriteComics={favoriteComics}
              setFavoriteComics={setFavoriteComics}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoriteCharacters={favoriteCharacters}
              favoriteComics={favoriteComics}
              token={token}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
