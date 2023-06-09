import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import SectionHeading from "../../../Shared/SectionHeading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddAClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const image_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hoisting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const classData = {
            name: data.className,
            instructor_name: user?.displayName,
            instructor_email: user?.email,
            available_seats: parseInt(data.available_seats),
            price: parseFloat(data.price),
            image: imageData.data.display_url,
            status: "pending",
          };
          axiosSecure.post("/classes", classData).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                title: "Class added Successfully",
                text: "Waiting for admin Approval !!",
                icon: "success",
                confirmButtonText: "ok",
              });
            }
          });
        }
      });
  };
  return (
    <div className="w-11/12 md:w-10/12  ">
      <SectionHeading heading="Add Class" subHeading="Class"></SectionHeading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" border bg-[#DFECFF] p-5 rounded space-y-3 shadow"
      >
        <h3 className="text-center text-2xl font-semibold"> Add a Class</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name*</span>
          </label>
          <input
            type="text"
            name="className"
            className="input input-bordered"
            placeholder="Enter class name"
            {...register("className", { required: true })}
          />
          {errors.className?.type === "required" && (
            <p className="text-red-600" role="alert">
              Class Name is required
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name*</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            placeholder="Enter instructor name"
            className="input input-bordered"
            {...register("instructor_name")}
          />

          {/* {errors.email?.type === "required" && (
            <p className="text-red-600" role="alert">
              Email is required
            </p>
          )} */}
        </div>
        <div className="mb-3 form-control">
          <label className="label">
            <span className="label-text">Instructor Email* </span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            defaultValue={user?.email}
            placeholder="Enter instructor email"
            {...register("instructor_email")}
          />
          {/* {errors.phone?.type === "required" && (
            <p className="text-red-600" role="alert">
              Phone number is required
            </p>
          )} */}
        </div>
        <div className="flex justify-between gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available seats*</span>
            </label>
            <input
              type="number"
              placeholder="Enter available seats"
              className="input input-bordered "
              {...register("available_seats", { required: true })}
            />
            {errors.available_seats?.type === "required" && (
              <p className="text-red-600" role="alert">
                Available seats are required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Enroll Fee* </span>
            </label>
            <input
              type="number"
              placeholder="Enter enroll fee"
              className="input input-bordered"
              {...register("price", { required: true })}
            />
            {errors.price?.type === "required" && (
              <p className="text-red-600" role="alert">
                Enroll fee is required
              </p>
            )}
          </div>
        </div>
        <div className="form-control w-full pb-3">
          <label className="label">
            <span className="label-text">Choose class image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            {...register("image", { required: true })}
          />
          {errors.image?.type === "required" && (
            <p className="text-red-600" role="alert">
              Image is required
            </p>
          )}
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

export default AddAClass;
