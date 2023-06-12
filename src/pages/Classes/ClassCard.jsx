import React, { useState } from "react";
import { FaVolleyballBall } from "react-icons/fa";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ClassCard = ({ data }) => {
  const { image, name, available_seats, enroll_students, price, instructor_name } = data;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [isAdmin, setAdmin] = useState(false);
  const [isInstructor, setInstructor] = useState(false);

  if (user) {
    fetch(`https://summer-camp-school-server-kohl.vercel.app/user/check/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "admin") {
          setAdmin(true);
        } else if (data.role === "instructor") {
          setInstructor(true);
        } else {
        }
      });
  }

  const [axiosSecure] = useAxiosSecure();
  const [disable, setDisable] = useState(false);

  const handleSelectClass = (classData) => {
    if (user) {
      const {
        _id,
        image,
        name,
        available_seats,
        price,
        instructor_name,
        instructor_email,
        enroll_students,
      } = classData;
      const bookedClass = {
        image,
        name,
        available_seats,
        price,
        instructor_name,
        instructor_email,
        enroll_students,
        user_email: user?.email,
        class_id: _id,
      };
      const productId = _id;
      const userEmail = user?.email;

      axiosSecure.post("/bookedclass", { bookedClass }).then((res) => {
        if (res.data.insertedId) {
          setDisable(true);
          localStorage.setItem(`cartButtonDisabled_${productId}_${userEmail}`, "true");
          Swal.fire({
            title: "Success!",
            text: "Successfully Booked a Class !!",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } else {
      const state = { from: location };
      navigate("/signin", { state, replace: true });
    }
  };

  return (
    <div
      className={`card rounded-none border border-purple-500 relative ${
        available_seats == 0 ? "bg-red-600" : "bg-slate-300"
      }`}
    >
      <figure className="">
        <img src={image} alt="" />
        <FaVolleyballBall className="text-6xl absolute bottom-[160px] bg-white  mx-auto rounded-full text-purple-600 hover:text-green-800  border-8 border-white  " />
        <div className="absolute top-0 right-0 text-xl py-2 px-4 bg-purple-500 text-white  font-medium ">
          Enroll Fee: ${price}
        </div>
      </figure>
      <div className="card-body p-4">
        <Fade direction="up" delay={1e3} cascade damping={1e-1}>
          <h2 className="card-title justify-center mt-4">{name}</h2>
          <p>Instructor: {instructor_name}</p>
          <div className="flex items-center justify-between">
            <p>Available seats: {available_seats}</p>
            <p>Enroll Students: {enroll_students}</p>
          </div>
        </Fade>
      </div>
      <div className="card-actions">
        <button
          onClick={() => handleSelectClass(data)}
          disabled={
            available_seats == 0 ||
            disable ||
            isAdmin ||
            isInstructor ||
            localStorage.getItem(`cartButtonDisabled_${data._id}_${user?.email}`) === "true"
          }
          className="btn btn-neutral w-full  rounded-none "
        >
          Select Class
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
