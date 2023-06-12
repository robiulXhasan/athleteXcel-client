import React from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { GiConfirmed, GiTeacher, GiWallet } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { NavLink, Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";
import { BsDatabaseFillAdd } from "react-icons/bs";
import logo from "../assets/logo.png";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut } = useAuth();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-neutral w-full drawer-button lg:hidden">
          <RiMenuUnfoldFill className="text-2xl"></RiMenuUnfoldFill>
        </label>
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="menu px-4 py-2 w-80 h-full text-lg font-medium bg-[#A6C9FF]  text-base-content">
          <div className="flex gap-2 mb-3">
            <img className="w-8" src={logo} alt="" />
            <div>
              <span className="px-0 text-xs  md:text-2xl tracking-[0.18rem] font-extrabold ">
                Athlete<span className="text-purple-600">Xcel</span>
              </span>
            </div>
          </div>
          <div className=" flex flex-col text-center mb-5">
            <img
              className="w-16 h-16 mx-auto rounded-full object-cover object-center"
              src={user?.photoURL}
              alt=""
            />
            <h3 className="text-lg ">{user.displayName}</h3>
          </div>
          <div>
            {" "}
            <ul>
              {/* Sidebar content here */}
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/admin-home">
                      <FaHome /> Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dashboard/manageclasses">
                      <SiGoogleclassroom /> Manage Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dashboard/manageusers">
                      <MdManageAccounts /> Manage Users
                    </NavLink>
                  </li>
                </>
              ) : isInstructor ? (
                <>
                  {" "}
                  <li>
                    <NavLink to="/dashboard/instructor-home">
                      <FaHome /> Instructor Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dashboard/addclass">
                      <BsDatabaseFillAdd /> Add a Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dashboard/myclasses">
                      <SiGoogleclassroom /> My Classes
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to="/dashboard/Student-home">
                      <FaHome /> Student Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/bookedclass">
                      <SiGoogleclassroom /> My Selected Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dashboard/enrollclass">
                      <GiConfirmed /> My Enrolled Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dashboard/payment-history">
                      <GiWallet /> Payment History
                    </NavLink>
                  </li>
                </>
              )}
              <div className="divider before:bg-white after:bg-white"></div>
              <li>
                <Link to="/">
                  {" "}
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/instructors">
                  <GiTeacher /> Instructors
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <SiGoogleclassroom /> Classes
                </Link>
              </li>
              <li>
                <Link onClick={logOut} to="/">
                  <FaSignOutAlt /> Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
