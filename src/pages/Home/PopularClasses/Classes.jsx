import React from "react";
import { FaVolleyballBall } from "react-icons/fa";

const Classes = ({ data }) => {
  const { image, name } = data;
  return (
    <div className="card rounded-none border border-purple-500 relative">
      <figure className="">
        <img src={image} alt="car!" />
        <FaVolleyballBall className="text-6xl absolute bottom-[120px]  mx-auto rounded-full text-purple-600 hover:text-green-800  border-8 border-white  " />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>Comfortable and spacious camps for your little ones</p>
      </div>
    </div>
  );
};

export default Classes;
