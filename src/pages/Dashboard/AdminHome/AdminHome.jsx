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
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

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
      <Helmet>
        <title>Admin Dashboard | AthleteXcel </title>
      </Helmet>
      <Fade direction="left" delay={1e3} cascade damping={1e-1}>
        <h1 className="text-2xl font-bold mb-10">Hi, Welcome {user.displayName}</h1>
      </Fade>

      <div className="md:flex space-y-5 md:space-y-0 gap-4 justify-center mb-20">
        <div className="bg-warning text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
          <Fade direction="left" delay={1e3} cascade damping={1e-1}>
            <p className="text-4xl ">{allClasses ? allClasses?.approvedResult?.length : 0}</p>
            <p className="text-2xl mt-4 ">Total Approved Class</p>
          </Fade>
        </div>
        <div className="bg-green-600 text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
          <Fade direction="right" delay={1e3} cascade damping={1e-1}>
            <p className="text-4xl ">{allClasses ? allClasses?.pendingResult?.length : 0}</p>
            <p className="text-2xl mt-4 ">Total Pending Class</p>
          </Fade>
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
