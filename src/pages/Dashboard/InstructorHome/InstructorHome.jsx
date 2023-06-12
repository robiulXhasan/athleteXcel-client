import React from "react";
import useAuth from "../../../hooks/useAuth";

const InstructorHome = () => {
  const { user } = useAuth();
  return (
    <div className=" w-11/12 ">
      <h1 className="text-3xl font-bold">Hi, Welcome {user.displayName}</h1>
    </div>
  );
};

export default InstructorHome;
