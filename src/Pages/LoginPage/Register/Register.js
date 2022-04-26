import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sociallogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    e.target.reset();
  };
  return (
    <div style={{ width: "300px", margin: "30px auto" }}>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          onChange={handleChange}
          style={{ marginTop: "10px", padding: "7px" }}
          type="text"
          placeholder="name"
          name="name"
          required
        />

        <input
          onChange={handleChange}
          style={{ marginTop: "10px", padding: "7px" }}
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          onChange={handleChange}
          style={{ marginTop: "10px", padding: "7px" }}
          type="password"
          placeholder="password"
          name="password"
          required
        />

        <input
          style={{ marginTop: "10px", padding: "7px" }}
          type="submit"
          value="Register"
        />
      </form>
      <div style={{ margin: "10px" }}>
        <span>Already have an account ? </span>
        <Link to="/login">Login</Link>
      </div>

      <Sociallogin />
    </div>
  );
};

export default Register;
