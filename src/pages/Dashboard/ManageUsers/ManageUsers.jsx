import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../Shared/SectionHeading";
import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {
  const [adminBtnDisable, setAdminBtnDisable] = useState(false);
  const [instructorBtnDisable, setInstructorBtnDisable] = useState(false);
  //   const { data: users = [], refetch } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () => {
  //       const res = await fetch("http://localhost:5000/users");
  //       return res.json();
  //     },
  //   });
  const [users, refetch] = useUsers();

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          return setAdminBtnDisable(!adminBtnDisable);
        } else {
          return setAdminBtnDisable(false);
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setInstructorBtnDisable(true);
          refetch();
        }
      });
  };

  return (
    <div className="w-10/12">
      <SectionHeading heading="Manage Users" subHeading="Manage Users"></SectionHeading>

      <div className="overflow-x-auto bg-[#DFECFF] p-5 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center my-5">Total Users: {users.length}</h3>
        <table className="table mb-10">
          {/* head */}
          <thead>
            <tr className="bg-[#0F7BF2] text-white">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id} className="">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role == "admin"
                    ? "Admin"
                    : user.role == "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>
                <td className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={adminBtnDisable}
                    className="btn btn-xs btn-warning btn-outline"
                  >
                    Make Admin
                  </button>{" "}
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={instructorBtnDisable}
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
