import React from "react";
import useClasses from "../../../hooks/useClasses";
import SectionHeading from "../../Shared/SectionHeading";

const ManageClasses = () => {
  const [classes, refetch] = useClasses();
  return (
    <div className="">
      <SectionHeading heading={"Manage Classes"} subHeading={"manage classes"} />
      <div className="overflow-x-auto bg-[#DFECFF] ">
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
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((data, index) => (
              <tr className="hover" key={data._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={data.image} alt="" />
                      </div>
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
                <td className="text-center">{data.status}</td>
                <td className="text-center flex mt-3 space-x-2">
                  <button
                    disabled={data?.status == "approved" || data?.status == "deny"}
                    className="btn btn-success btn-xs"
                  >
                    Approve
                  </button>
                  <button
                    disabled={data?.status == "approved" || data?.status == "deny"}
                    className="btn btn-warning btn-xs"
                  >
                    Deny
                  </button>
                  <button className="btn btn-success btn-xs">Feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
