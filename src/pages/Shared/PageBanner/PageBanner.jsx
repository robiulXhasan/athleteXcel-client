import React from "react";

const PageBanner = ({ bannerTitle, image }) => {
  return (
    <div
      className="relative bg-cover bg-center h-96"
      style={{
        backgroundImage: `url(
            ${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0  flex flex-col md:w-1/2 mx-auto justify-center items-center">
        <h1 className="text-white text-4xl font-semibold text-center">{bannerTitle}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
