import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Payment History | AthleteXcel </title>
      </Helmet>
      <SectionHeading heading={"Payment History"} subHeading={"Payment"} />
      <div className="overflow-x-auto bg-[#DFECFF] p-5 mb-10 rounded-lg shadow-xl">
        <table className="table table-md table-pin-rows table-pin-cols ">
          <thead>
            <tr className="bg-primary text-white">
              <td className="text-center"></td>
              <td className="text-center">Class Image </td>
              <td className="text-center">Class Name</td>
              <td className="text-center">Instructor Info</td>
              <td className="text-center">Enroll Fee</td>
              <td className="text-center">Transaction Id</td>
              <td className="text-center">Payment Date</td>
            </tr>
          </thead>
          <tbody>
            {payments.map((data, index) => (
              <tr key={data._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={data?.class?.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="text-center">{data?.class?.name}</td>
                <td className="text-center">
                  <p>{data?.class?.instructor_name}</p>
                  <p>{data?.class?.instructor_email}</p>
                </td>
                <td className="text-center">${data?.class?.price}</td>
                <td className="text-center font-semibold text-green-600">{data?.transactionId}</td>
                <td>{data?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
