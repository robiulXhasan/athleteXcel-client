import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel className="text-center" showStatus={0} showThumbs={false}>
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(
            "https://img.freepik.com/free-vector/realistic-soccer-league-final-illustration_52683-60374.jpg?w=1060&t=st=1686151973~exp=1686152573~hmac=73c691360ff17d060e9c51f6537bb6cfe6d86ff3e0c0016db3ab2e2864085fbe"
          )`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0  flex flex-col justify-center items-center w-2/3 md:w-1/2 mx-auto">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            Welcome to Summer Camp Sports Academies
          </h1>
          <button className="btn bg-purple-600 text-white hover:text-black border-none mt-4">Book Now</button>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(
            "https://img.freepik.com/free-vector/realistic-soccer-league-final-illustration_52683-60374.jpg?w=1060&t=st=1686151973~exp=1686152573~hmac=73c691360ff17d060e9c51f6537bb6cfe6d86ff3e0c0016db3ab2e2864085fbe"
          )`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0  flex flex-col md:w-1/2 mx-auto justify-center items-center">
          <h1 className="text-white text-4xl font-semibold">
            Welcome to Summer Camp Sports Academies
          </h1>
          <button className="btn bg-purple-600 text-white hover:text-black border-none mt-4">Book Now</button>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(
            "https://img.freepik.com/free-vector/realistic-soccer-league-final-illustration_52683-60374.jpg?w=1060&t=st=1686151973~exp=1686152573~hmac=73c691360ff17d060e9c51f6537bb6cfe6d86ff3e0c0016db3ab2e2864085fbe"
          )`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0  flex flex-col md:w-1/2 mx-auto justify-center items-center">
          <h1 className="text-white text-4xl font-semibold">
            Welcome to Summer Camp Sports Academies
          </h1>
          <button className="btn bg-purple-600 text-white hover:text-black border-none mt-4">Book Now</button>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(
            "https://img.freepik.com/free-vector/realistic-soccer-league-final-illustration_52683-60374.jpg?w=1060&t=st=1686151973~exp=1686152573~hmac=73c691360ff17d060e9c51f6537bb6cfe6d86ff3e0c0016db3ab2e2864085fbe"
          )`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0  flex flex-col md:w-1/2 mx-auto justify-center items-center">
          <h1 className="text-white text-4xl font-semibold">
            Welcome to Summer Camp Sports Academies
          </h1>
          <button className="btn bg-purple-600 text-white hover:text-black border-none mt-4">Book Now</button>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(
            "https://img.freepik.com/free-vector/realistic-soccer-league-final-illustration_52683-60374.jpg?w=1060&t=st=1686151973~exp=1686152573~hmac=73c691360ff17d060e9c51f6537bb6cfe6d86ff3e0c0016db3ab2e2864085fbe"
          )`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0  flex flex-col md:w-1/2 mx-auto justify-center items-center">
          <h1 className="text-white text-4xl font-semibold">
            Welcome to Summer Camp Sports Academies
          </h1>
          <button className="btn bg-purple-600 text-white hover:text-black border-none mt-4">Book Now</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
