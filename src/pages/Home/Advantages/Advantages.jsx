import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import image from "../../../assets/pngwing.com.png";
import { BsCheckCircleFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Advantages = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <SectionHeading heading={"Reasons to Enroll"} subHeading={"Advantages"} />
      <div
        className="md:bg-fixed w-full "
        style={{
          backgroundImage: `URL(${image})`,
          backgroundRepeat: "no-repeat",
         
          backgroundPositionX: "center",
          backgroundPositionY: "top",
        }}
      >
        <Fade direction="left">
          <div className="md:flex justify-between pt-10">
            <div className="md:w-1/3">
              <div className="flex gap-3 items-center  bg-gray-200  rounded-xl  p-2 shadow-xl  ">
                <BsCheckCircleFill className="text-green-600 w-20 text-4xl" />
                <div>
                  <h3 className="font-bold">Experienced Instructors</h3>
                  <p>Enjoy the personalized learning process and get the maximum out of it.</p>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="md:flex justify-between mt-10">
            <div></div>
            <div className="md:w-1/3">
              <div className="flex gap-3 items-center  bg-gray-200  rounded-xl  p-2 shadow-xl">
                <BsCheckCircleFill className="text-green-600 w-20 text-4xl" />
                <div>
                  <h3 className="font-bold">Convenient Location</h3>
                  <p>
                    Find our courts in the friendly area easily and travel to play with no hassle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="left">
          <div className="md:flex justify-between pt-10">
            <div className="flex gap-3 items-center md:w-1/3 bg-gray-200  rounded-xl  p-2 shadow-xl  ">
              <BsCheckCircleFill className="text-green-600 w-20 text-4xl" />
              <div>
                <h3 className="font-bold">Flexible Scheduling</h3>
                <p>Pick the most comfortable time for you or your kids’ training to play. </p>
              </div>
            </div>
            <div></div>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="md:flex justify-between mt-10 pb-10">
            <div></div>
            <div className="flex gap-3 items-center md:w-1/3 bg-gray-200  rounded-xl  p-2 shadow-xl  ">
              <BsCheckCircleFill className="text-green-600 w-20 text-4xl" />
              <div>
                <h3 className="font-bold">Our Classes</h3>
                <p>Our classes are artfully developed for beginners and experiences players.</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Advantages;
