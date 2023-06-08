import React from "react";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="relative flex items-center justify-center my-10">
      <h1 className=" uppercase text-white section-heading font-extrabold">{subHeading}</h1>
      <h1 className="absolute  text-3xl text-purple-500 font-bold">{heading}</h1>
    </div>
  );
};

export default SectionHeading;
