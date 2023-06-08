import React from "react";
import { FaVolleyballBall } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const InstructorCard = ({ instructor }) => {
  const { instructor_img, instructor_name, instructor_email, rating, programs } = instructor;
  return (
    <div className="card rounded-none border border-purple-500 relative bg-slate-300 ">
      <figure className="">
        <img src={instructor_img} alt="car!" />
        <FaVolleyballBall className="text-6xl absolute bottom-[130px] bg-white  mx-auto rounded-full text-purple-600 hover:text-green-800  border-8 border-white  " />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{instructor_name}</h2>
        <div className="flex items-center gap-2 ">
          <CiMail /> {instructor_email}
        </div>
        <div className="flex gap-3">
          Rating: <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
