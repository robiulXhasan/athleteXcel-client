import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialSignIn from "../Shared/SocialSignIn/SocialSignIn";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [visibleC, setVisibleC] = useState(false);
  const { createUser, profileUpdate, logOut } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    // create user
    createUser(data.email, data.password)
      .then((result) => {
        // update user name and photoURl
        profileUpdate(data.name, data.photoURL)
          .then(() => {
            const savedUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Register",
                    showConfirmButton: false,
                    timer: 1000,
                  });
                  logOut()
                    .then(() => {
                      navigate("/signin");
                    })
                    .catch((error) => {
                      console.log(error.message);
                    });
                }
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleShowPassword = () => {
    setVisible(!visible);
  };
  const handleShowPasswordC = () => {
    setVisibleC(!visibleC);
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
            <h2 className="text-center font-semibold text-3xl">Sign Up</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Name is required
                </p>
              )}
            </div>
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
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/,
                })}
              />
              <button
                className={`absolute  right-5 ${
                  errors.password ? "bottom-9" : "bottom-4"
                }  text-gray-500`}
                onClick={handleShowPassword}
              >
                {visible ? (
                  <BsFillEyeFill
                    className={`${errors.password?.type === "pattern" ? "mb-6" : "mb-0"}`}
                  />
                ) : (
                  <BsFillEyeSlashFill
                    className={`${errors.password?.type === "pattern" ? "mb-6" : "mb-0"}`}
                  />
                )}
              </button>
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600" role="alert">
                  Password should be 6 character long!
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 text-start text-sm" role="alert">
                  Password must be less than 20 character long
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 text-start text-sm" role="alert">
                  Password must have one lower case, one uppercase, one number and one special
                  character
                </p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type={visibleC ? "text" : "password"}
                placeholder="Confirm password"
                className="input input-bordered"
                {...register("cpassword", {
                  validate: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords should match!";
                  },
                })}
              />
              <button
                className={`absolute  right-5 ${
                  errors.cpassword ? "bottom-9" : "bottom-4"
                }  text-gray-500`}
                onClick={handleShowPasswordC}
              >
                {visibleC ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
              {errors.cpassword && (
                <p className="text-red-600" role="alert">
                  {errors.cpassword.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter photo url"
                className="input input-bordered"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Photo URL is required
                </p>
              )}
            </div>
            <p className="text-red-600">{error}</p>
            <div className="form-control mt-5">
              <input
                type="submit"
                value=" Sign Up"
                className="btn bg-[#0F7BF2] text-white hover:text-black border border-[#0F7BF2] hover:border-[#0F7BF2]"
              />
            </div>
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="font-bold">
                Sign In
              </Link>
            </p>
            <SocialSignIn setError={setError} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
