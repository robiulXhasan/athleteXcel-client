import React from "react";
import { FaVolleyballBall } from "react-icons/fa";

const Classes = ({ data }) => {
  const { image, name, enroll_students } = data;
  return (
    <div className="card rounded-none border border-purple-500 relative">
      <figure className="">
        <img className="h-[300px] w-full object-cover object-center" src={image} alt="car!" />
        <FaVolleyballBall className="text-6xl absolute bottom-[128px]  mx-auto rounded-full text-purple-600 hover:text-green-800 bg-white border-8 border-white  " />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <marquee truespeed={70} className="font-semibold">
          Comfortable and spacious camps for your little ones
        </marquee>
        <p>Enrolled students: {enroll_students}</p>
      </div>
    </div>
  );
};

export default Classes;
