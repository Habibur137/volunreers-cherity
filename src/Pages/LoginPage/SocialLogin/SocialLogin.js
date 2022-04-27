import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../img/image8-2.png";

const Sociallogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  let errorTag;
  if (error) {
    errorTag = <p className="text-danger">{error.message}</p>;
  }

  return (
    <div>
      {errorTag}
      <button
        onClick={() => signInWithGoogle()}
        style={{
          padding: "10px 20px",
          border: "0",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <img style={{ width: "40px" }} src={logo} alt="" />{" "}
        <span>Google Sign In</span>
      </button>
    </div>
  );
};

export default Sociallogin;
