import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Advantages from "../Advantages/Advantages";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | AthleteXcel </title>
      </Helmet>
      <Banner />
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Advantages />
    </div>
  );
};

export default Home;
