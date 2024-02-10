import { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup">
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
        <input type="password" name="password" id="password" />
      </div>
    </div>
  );
};

export default Signup;
