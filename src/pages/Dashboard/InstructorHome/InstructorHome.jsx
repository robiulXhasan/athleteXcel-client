import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const InstructorHome = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: addedClass = [] } = useQuery({
    queryKey: ["addedClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/addedclasses/${user?.email}`);
      console.log(res);
      return res.data;
    },
  });

  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolledClass", user?.email],
    enabled: !loading,
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

  const totalStudent = addedClass?.approvedResult?.reduce((sum, item) => {
    return sum + item?.enroll_students;
  }, 0);

  return (
    <div className="  min-h-screen min-w-full p-20">
      <Helmet>
        <title>Instructor Dashboard | AthleteXcel </title>
      </Helmet>
      <Fade direction="left" delay={1e3} cascade damping={1e-1}>
        <h1 className="text-2xl font-bold mb-10">Hi, Welcome {user.displayName}</h1>
      </Fade>{" "}
      <div className="md:flex space-y-5 md:space-y-0 gap-4">
        <Fade direction="left">
          <div className="bg-warning text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
            <p className="text-4xl ">{addedClass ? addedClass?.approvedResult?.length : 0}</p>
            <p className="text-2xl mt-4 "> Approved Class</p>
          </div>
        </Fade>
        <Fade direction="up">
          <div className="bg-green-600 text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
            <p className="text-4xl ">{addedClass ? addedClass?.pendingResult?.length : 0}</p>
            <p className="text-2xl mt-4 "> Pending Class</p>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="bg-primary text-white text-center font-bold  px-20 py-12 rounded-xl shadow-xl">
            <p className="text-4xl ">{totalStudent ? totalStudent : 0}</p>
            <p className="text-2xl mt-4 "> Total Students</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default InstructorHome;
