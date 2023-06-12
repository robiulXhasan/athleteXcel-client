import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: allClasses = [] } = useQuery({
    queryKey: ["allClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/allclasses");
      return res.data;
    },
  });

  return (
    <div className=" p-4">
      <h1 className="text-2xl font-bold mb-10">Hi, Welcome {user.displayName}</h1>

      <div className="md:flex space-y-5 md:space-y-0 gap-4 justify-center mb-20">
        <div className="bg-warning text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
          <p className="text-4xl ">{allClasses?.approvedResult?.length}</p>
          <p className="text-2xl mt-4 ">Total Approved Class</p>
        </div>
        <div className="bg-green-600 text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
          <p className="text-4xl ">{allClasses?.pendingResult?.length}</p>
          <p className="text-2xl mt-4 ">Total Pending Class</p>
        </div>
      </div>
      <ComposedChart width={850} height={250} data={allClasses?.approvedResult}>
        <XAxis dataKey="name" />
        <YAxis dataKey="enroll_students" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />

        <Bar dataKey="enroll_students" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </div>
  );
};

export default AdminHome;
