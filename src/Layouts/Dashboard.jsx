import React from "react";
import { FaCalendar, FaHome, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { BiSelectMultiple } from "react-icons/bi";
import { NavLink, Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-lg font-medium  bg-[#A6C9FF] text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="dashboard/adminhome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/manageclasses">
                  <FaCalendar /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/manageusers">
                  <FaWallet /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/alluser">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              {" "}
              <li>
                <NavLink to="dashboard/home">
                  <FaHome /> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/addclass">
                  <FaCalendar /> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/myclasses">
                  <FaHome /> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="dashboard/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/reservation">
                  <BiSelectMultiple /> My Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/reservation">
                  <GiConfirmed /> My Enrolled Class
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/payment">
                  <FaWallet /> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider before:bg-white after:bg-white"></div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
