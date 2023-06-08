import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate, Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { LoginUser, googleLogin } = useAuth();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    // handle login with email and password
    LoginUser(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleShowPassword = () => {
    setVisible(!visible);
  };

  return (
    <div className="hero min-h-screen w-11/12 md:w-10/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row justify-between md:mt-20">
        <div className="text-center lg:text-left">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1686238534~exp=1686239134~hmac=a1e165ef7ac48d925f937364472e3266260880f90b568f4c902b840e785842be"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-[#DFECFF]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-center font-semibold text-3xl">Sign In</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />

              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={visible ? "text" : "password"}
                placeholder="password"
                className="input input-bordered "
                {...register("password", { required: true })}
              />
              <button
                className={`absolute  right-5 ${
                  errors.password ? "bottom-16" : "bottom-12"
                }  text-gray-500`}
                onClick={handleShowPassword}
              >
                {visible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Password is required
                </p>
              )}
              <label className="label ">
                <a href="#" className="label-text-alt link link-hover ">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-red-600">{error}</p>
            <div className="form-control">
              <input
                type="submit"
                value=" Sign In"
                className="btn bg-[#0F7BF2] text-white hover:text-black border border-[#0F7BF2] hover:border-[#0F7BF2]"
              />
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="font-bold">
                Sign Up
              </Link>
            </p>
            <div className="divider">Or</div>
            <div className="flex justify-center items-center gap-2 btn btn-outline">
              <FcGoogle />
              Sign In with Google
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
