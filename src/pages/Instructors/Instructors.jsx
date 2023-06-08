import React from "react";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "./InstructorCard";
import PageBanner from "../Shared/PageBanner/PageBanner";
import SectionHeading from "../Shared/SectionHeading";

const Instructors = () => {
  const instructors = useInstructors();

  return (
    <div>
      <PageBanner
        bannerTitle="Best Instructors will make you to produce best Output!"
        image="https://img.freepik.com/free-photo/full-shot-kid-man-playing-together_23-2149235661.jpg?size=626&ext=jpg&ga=GA1.1.1346969389.1672858153&semt=country_rows_v1"
      />
      <div className="w-11/12 md:w-10/12 mx-auto mt-10">
        <SectionHeading heading="Our Instructors" subHeading="instructors"></SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
