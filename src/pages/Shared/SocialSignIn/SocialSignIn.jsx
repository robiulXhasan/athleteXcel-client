import React from "react";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation } from "react-router-dom";

const SocialSignIn = ({ setError }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleLogin } = useAuth();
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        const user = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              console.log("success");
            }
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="divider">Or</div>
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center gap-2 btn btn-outline"
      >
        <FcGoogle />
        Sign In with Google
      </div>
    </div>
  );
};

export default SocialSignIn;
