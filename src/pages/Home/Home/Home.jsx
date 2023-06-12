import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Advantages from "../Advantages/Advantages";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Advantages />
    </div>
  );
};

export default Home;
