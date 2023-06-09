import React from "react";
import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../Shared/SectionHeading";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
        }
      });
  };

  return (
    <div className="w-10/12">
      <SectionHeading heading="Manage Users" subHeading="Manage Users"></SectionHeading>
      <h3 className="text-2xl font-bold text-center ">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
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
                    className="btn btn-xs btn-warning btn-outline"
                  >
                    Make Admin
                  </button>{" "}
                  <button
                    onClick={() => handleMakeInstructor(user)}
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
