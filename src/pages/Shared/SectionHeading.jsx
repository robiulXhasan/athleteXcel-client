import React from "react";
import { Fade } from "react-awesome-reveal";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="relative flex items-center justify-center my-10  mx-auto p-5 bg-white">
      <Fade direction="left">
        <h1
          style={{ WebkitTextStroke: "1px rgb(243, 235, 243)" }}
          className="uppercase 
          text-white
        font-extrabold text-5xl md:text-7xl"
        >
          {subHeading}
        </h1>
      </Fade>

      <h1 className="absolute text-xl  md:text-3xl text-purple-500 font-bold">{heading}</h1>
    </div>
  );
};

export default SectionHeading;
