import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ setToken }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const login = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://site--marvel-backend--nh2bbcwygd2q.code.run/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("response=", response.data);
      setToken(response.data.token);
      Cookies.set("userToken", response.data.token);

      navigate("/");
    } catch (error) {
      console.log("error=", error.response.data);
    }
  };

  return (
    <form className="signup" onSubmit={login}>
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          placeholder="hulk@marvel.com"
          name="email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button>Login!</button>
    </form>
  );
};

export default Login;
