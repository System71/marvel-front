import "./signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = ({ setToken }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const signup = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://site--marvel-backend--nh2bbcwygd2q.code.run/user/signup",
        {
          username: username,
          email: email,
          password: password,
          avatar: avatar,
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
    <form className="signup" onSubmit={signup}>
      <div>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="Hulk"
          name="username"
          id="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>

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
      <div>
        <input
          type="file"
          name="avatar"
          id="avatar"
          value={avatar}
          onChange={(event) => {
            setAvatar(event.target.value);
          }}
        />
      </div>
      <button>Signup!</button>
    </form>
  );
};

export default Signup;
