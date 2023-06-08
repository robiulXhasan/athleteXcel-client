import React from "react";
import useClasses from "../../../../hooks/useClasses";
import SectionHeading from "../../../Shared/SectionHeading";
import Instructor from "./Instructor";

const PopularInstructors = () => {
  const classes = useClasses();
  const popularInstructors = classes.sort((a, b) => b.num_students - a.num_students).slice(0, 6);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mb-10">
      <SectionHeading heading="Popular Instructors" subHeading="Instructors"></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularInstructors.map((data) => (
          <Instructor key={data._id} data={data}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
