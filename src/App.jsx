import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import CharacterCard from "./pages/CharacterCard/CharacterCard";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterCard />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
