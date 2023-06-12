import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();

  // use axios secure with react query
  const { data, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${id}`);
      return res.data;
    },
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.className.value;
    const available_seats = form.available_seats.value;
    const price = parseFloat(form.price.value);
    const data = { name, available_seats, price };
    console.log(data);

    axiosSecure.patch(`/classes/update/${id}`, { data }).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire("Updated!", "Updated Successfully!", "success");
      }
    });
  };
  return (
    <div>
      <SectionHeading heading={"Update "} subHeading={"update"} />

      <form onSubmit={handleUpdate} className=" border bg-[#DFECFF] p-5 rounded space-y-3 shadow">
        <h3 className="text-center text-2xl font-semibold"> Add a Class</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name*</span>
          </label>
          <input
            type="text"
            name="className"
            defaultValue={data?.name}
            className="input input-bordered"
            placeholder="Enter class name"
          />
        </div>

        <div className="flex justify-between gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available seats*</span>
            </label>
            <input
              type="number"
              name="available_seats"
              placeholder="Enter available seats"
              defaultValue={data?.available_seats}
              className="input input-bordered "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Enroll Fee* </span>
            </label>
            <input
              type="number"
              placeholder="Enter enroll fee"
              name="price"
              className="input input-bordered"
              defaultValue={data?.price}
            />
          </div>
        </div>
        <input
          type="submit"
          className="btn  bg-[#027BFF] border text-white hover:border-[#027BFF] hover:text-[#027BFF] w-full font-bold p-2"
          value="Add"
        />
      </form>
    </div>
  );
};

export default UpdateClass;
