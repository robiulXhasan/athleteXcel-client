import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../Shared/SectionHeading";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: bookedClasses = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookedClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedclass/${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    <div className="text-center">
      <progress className="progress w-56"></progress>
    </div>;
  }

  const handleDelete = (id) => {
    axiosSecure.delete(`/bookedclass/${id}`).then((res) => {
      if (res.data.deletedCount) {
        localStorage.removeItem(`cartButtonDisabled_${id}_${user?.email}`);

        refetch();
      }
    });
  };
  return (
    <div className="w-11/12 md:w-10/12">
      <SectionHeading heading="Booked Classes" subHeading="classes" />
      <div className="overflow-x-auto bg-[#DFECFF] w-full p-5 shadow-lg rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-primary text-white">
              <th className="text-center"></th>
              <th className="text-center">Image</th>
              <th className="text-center">Name</th>
              <th className="text-center">Instructor Info</th>
              <th className="text-center">Available Seats</th>
              <th className="text-center">Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookedClasses.map((data, index) => (
              <tr className="hover border-slate-400" key={data._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={data.image} alt="" />
                    </div>
                  </div>
                </td>
                <td className="text-center font-semibold">{data.name}</td>
                <td className="text-center">
                  <div>
                    <div className="font-bold">{data.instructor_name}</div>
                    <div className="text-sm opacity-50">{data.instructor_email}</div>
                  </div>
                </td>
                <td className="text-center">{data.available_seats}</td>
                <td className="text-center">${data.price}</td>

                <td className="text-center flex justify-center mt-3 space-x-2">
                  <Link to={"/dashboard/payment/"} state={data} className="btn btn-success btn-xs">
                    Pay
                  </Link>
                  <button onClick={() => handleDelete(data._id)} className="btn btn-warning btn-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
