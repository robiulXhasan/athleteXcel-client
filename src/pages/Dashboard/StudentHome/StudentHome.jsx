import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const StudentHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: bookedClasses = [] } = useQuery({
    queryKey: ["bookedClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedclass/${user?.email}`);
      return res.data;
    },
  });
  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolledClass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrollclass/${user?.email}`);
      return res.data;
    },
  });
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  const totalPaid = payments.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div className="  min-h-screen min-w-full p-20">
      <h1 className="text-2xl font-bold mb-10">Hi, Welcome {user.displayName}</h1>
      <div className="flex gap-4">
        <div className="bg-warning text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
          <p className="text-4xl ">+{bookedClasses.length}</p>
          <p className="text-2xl mt-4 "> Booked Class</p>
        </div>
        <div className="bg-green-600 text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
          <p className="text-4xl ">+{enrolledClass.length}</p>
          <p className="text-2xl mt-4 "> Enrolled Class</p>
        </div>
        <div className="bg-primary text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
          <p className="text-4xl ">${totalPaid}</p>
          <p className="text-2xl mt-4 "> Total Paid</p>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
