import React from "react";
import PageBanner from "../Shared/PageBanner/PageBanner";
import useClasses from "../../hooks/useClasses";
import SectionHeading from "../Shared/SectionHeading";
import ClassCard from "./ClassCard";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes] = useClasses();
  return (
    <div>
      <Helmet>
        <title>Classes | AthleteXcel </title>
      </Helmet>
      <PageBanner
        bannerTitle="Find Classes for this summer, Hope this summer will bring more joy"
        image="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=900&t=st=1686207643~exp=1686208243~hmac=ebe13154df04d162bf34a0599b2bcc2c15ca0889e2a5a92de76f01c0e2722418"
      ></PageBanner>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <SectionHeading heading="Our Classes" subHeading="classes"></SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {classes.map((data) => (
            <ClassCard key={data._id} data={data}></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
