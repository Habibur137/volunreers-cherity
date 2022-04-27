import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sociallogin from "../SocialLogin/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const [createUserWithEmailAndPassword, registerUser, loading, creationError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    e.target.reset();
  };
  let errorTag;
  if (creationError || updateError) {
    errorTag = (
      <p>
        {creationError.message} {updateError.message}
      </p>
    );
  }
  if (registerUser) {
    console.log(registerUser);
    toast("Account Created");
  }
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
      {errorTag}
      <div style={{ margin: "10px" }}>
        <span>Already have an account ? </span>
        <Link to="/login">Login</Link>
      </div>
      <ToastContainer />
      <Sociallogin />
    </div>
  );
};

export default Register;
