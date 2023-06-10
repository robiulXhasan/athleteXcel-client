import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../Shared/SectionHeading";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  //   const { data: users = [], refetch } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () => {
  //       const res = await fetch("https://summer-camp-school-server-kohl.vercel.app/users");
  //       return res.json();
  //     },
  //   });
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
    <div className="w-11/12">
      <SectionHeading heading="Manage Users" subHeading="Manage Users"></SectionHeading>

      <div className="overflow-x-auto bg-[#DFECFF]  rounded-lg shadow-lg table-pin-rows table-pin-cols">
        <h3 className="text-2xl font-bold text-center my-5">Total Users: {users.length}</h3>
        <table className="table mb-10">
          {/* head */}
          <thead>
            <tr className="w-full ">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id} className="hover border-b border-slate-300">
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role == "admin"
                    ? "Admin"
                    : user?.role == "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>
                <td className=" flex justify-start gap-2 ">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user?.role === "admin"}
                    className="btn btn-xs btn-success   btn-outline"
                  >
                    Make Admin
                  </button>{" "}
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user?.role === "instructor"}
                    className="btn btn-xs btn-outline"
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
