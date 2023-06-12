import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SectionHeading from "../../Shared/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FeedBackClasses = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${id}`);
      return res.data;
    },
  });
  const onSubmit = (data) => {
    const feedback = data.feedback;
    axiosSecure.patch(`/classes/feedback/${id}`, { feedback }).then((res) => {
      if (res.data.modifiedCount) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "FeedBack Sent successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="md:w-10/12">
      <Helmet>
        <title>Feedback | AthleteXcel </title>
      </Helmet>
      <SectionHeading heading="Feedback" subHeading="Feedback" />
      <div className="bg-[#DFECFF] p-10 rounded">
        <div className=" card md:card-side  bg-base-100 items-center  shadow-xl p-0">
          <figure className="">
            <img src={data?.image} alt="Movie" className=" md:w-72 md:h-96 rounded-l-lg" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{data?.name}</h2>
            <p>Instructor: {data?.instructor_name}</p>
            <p>Instructor Email: {data?.instructor_email}</p>
            <p>Price:$ {data?.price}</p>
            <p>
              Status: <span className="text-red-600 font-bold">{data?.status}</span>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                type="textarea"
                className="input input-bordered mt-2 w-full"
                placeholder="Write feedback for denied"
                {...register("feedback")}
              />
              <br />
              <input type="submit" className="btn bg-[#0F7BF2] mt-2 w-full" value="Send Feedback" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackClasses;
