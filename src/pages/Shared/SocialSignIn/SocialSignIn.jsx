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
      .then(() => {
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
