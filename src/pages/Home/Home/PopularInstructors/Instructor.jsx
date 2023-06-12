import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaVolleyballBall } from "react-icons/fa";

const Instructor = ({ data }) => {
  const { name, image } = data;
  return (
    <div className="card rounded-none border p-5  border-purple-500  bg-slate-300 ">
      <figure>
        <img
          className=" rounded-full h-48 w-48 md:h-72 md:w-72 object-cover object-center relative"
          src={image}
          alt="car!"
        />
        <FaVolleyballBall className="text-6xl absolute bottom-[120px] bg-white  mx-auto rounded-full text-purple-600 hover:text-green-800  border-8 border-white  " />
      </figure>
      <div className="card-body ">
        <h2 className="card-title justify-center text-xl text-center">{name}</h2>

        <div className="flex gap-3">
          Rating: <Rating style={{ maxWidth: 100 }} value={4} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
