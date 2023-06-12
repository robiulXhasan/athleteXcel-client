import React, { useState } from "react";
import SectionHeading from "../../Shared/SectionHeading";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [users, refetch] = useUsers();
  const [axiosSecure] = useAxiosSecure();

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
      }
    });
  };
  const handleMakeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
      }
    });
  };

  return (
    <div className="w-full px-10 ">
      <Helmet>
        <title>Manage Users | AthleteXcel </title>
      </Helmet>
      <SectionHeading heading="Manage Users" subHeading="Manage Users"></SectionHeading>
      <div className="overflow-x-auto bg-[#DFECFF] py-10 rounded-lg shadow-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-primary text-white">
              <th></th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id} className="hover border-b border-slate-300">
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{user?.name}</td>
                <td className="text-center">{user?.email}</td>
                <td className="text-center">
                  {user?.role == "admin"
                    ? "Admin"
                    : user?.role == "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>
                <td className=" flex justify-center mt-3 space-x-2 text-center">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user?.role === "admin"}
                    className="btn btn-xs btn-success  "
                  >
                    Make Admin
                  </button>{" "}
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user?.role === "instructor"}
                    className="btn btn-xs  btn-warning"
                  >
                    Make Instructor
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

export default ManageUsers;
