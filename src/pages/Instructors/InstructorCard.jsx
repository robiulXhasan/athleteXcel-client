import React from "react";
import { FaVolleyballBall } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Fade } from "react-awesome-reveal";

const InstructorCard = ({ instructor }) => {
  const { image, name, email } = instructor;
  return (
    <div className="card rounded-none border p-5  border-purple-500  bg-slate-300 ">
      <figure>
        <img
          className=" rounded-full h-72 w-72 object-cover object-center relative"
          src={image}
          alt="car!"
        />
        <FaVolleyballBall className="text-6xl absolute bottom-[150px] bg-white  mx-auto rounded-full text-purple-600 hover:text-green-800  border-8 border-white  " />
      </figure>
      <div className="card-body ">
        <Fade direction="up" delay={1e3} cascade damping={1e-1}>
          <h2 className="card-title justify-center text-xl text-center">{name}</h2>
          <div className="flex items-center gap-2 ">
            <CiMail /> {email}
          </div>
          <div className="flex gap-3">
            Rating: <Rating style={{ maxWidth: 100 }} value={4} readOnly />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default InstructorCard;
