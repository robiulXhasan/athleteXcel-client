import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Instructor = ({ data }) => {
  const { instructor_name, instructor_img, rating } = data;
  return (
    <div className="card border border-purple-500  rounded-none">
      <figure>
        <img src={instructor_img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructor_name}</h2>
        <div className="flex gap-3">
          Rating: <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
