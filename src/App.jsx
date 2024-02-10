import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import CharacterCard from "./pages/CharacterCard/CharacterCard";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { useState } from "react";
import Cookies from "js-cookie";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || "");

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterCard />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
