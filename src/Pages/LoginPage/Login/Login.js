import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sociallogin from "../SocialLogin/SocialLogin";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, loginUser, loading, loginError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let errorTag;
  if (loginError || resetError) {
    errorTag = (
      <p className="text-danger">
        {loginError.message} {resetError.message}
      </p>
    );
  }

  if (loginUser) {
    console.log(loginUser);
    toast("Login Successfull");
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("send reset email");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);

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
          value="Login"
        />
      </form>
      {errorTag}
      <div style={{ margin: "10px" }}>
        <span>Need an account ? </span>
        <Link to="/register">Register</Link>
      </div>
      <p>
        Forgot Password ?{" "}
        <button onClick={resetPassword} className="btn btn-link">
          Click Here
        </button>
      </p>

      <ToastContainer />
      <Sociallogin />
    </div>
  );
};

export default Login;
