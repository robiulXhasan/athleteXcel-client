import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import useClasses from "../../../hooks/useClasses";
import Classes from "./Classes";

const PopularClasses = () => {
  const [classes] = useClasses();
  console.log(classes);
  const popularClasses = classes.sort((a, b) => b.num_students - a.num_students).slice(0, 6);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <SectionHeading heading="Popular Classes" subHeading="Classes"></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularClasses.map((data) => (
          <Classes key={data._id} data={data}></Classes>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
