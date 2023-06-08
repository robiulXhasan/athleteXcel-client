import React, { useState } from "react";
import { FaVolleyballBall } from "react-icons/fa";

const ClassCard = ({ data }) => {
  const { image, name, available_seats, price, instructor } = data;
  //TODO: update the user statue from backend
  const isAdmin = false;
  const isInstructor = false;

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
        <p>Instructor: {instructor.instructor_name}</p>
        <div className="flex items-center justify-between">
          <p>Available seats: {available_seats}</p>
          <p>Fee: ${price}</p>
        </div>
      </div>
      <div className="card-actions">
        <button
          disabled={available_seats == 0 || isAdmin || isInstructor}
          className="btn btn-neutral w-full  rounded-none "
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default ClassCard;