import React, { useState } from "react";
import { FaVolleyballBall } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ClassCard = ({ data, refetch }) => {
  const { image, name, available_seats, price, instructor_name } = data;
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosSecure] = useAxiosSecure();
  const [disable, setDisable] = useState(false);

  const handleSelectClass = (classData) => {
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
        refetch();
        Swal.fire({
          title: "Success!",
          text: "Successfully Booked a Class !!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    });
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
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title justify-center mt-4">{name}</h2>
        <p>Instructor: {instructor_name}</p>
        <div className="flex items-center justify-between">
          <p>Available seats: {available_seats}</p>
          <p>Fee: ${price}</p>
        </div>
      </div>
      <div className="card-actions">
        <button
          onClick={() => handleSelectClass(data)}
          disabled={
            available_seats == 0 ||
            isAdmin ||
            isInstructor ||
            disable ||
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
