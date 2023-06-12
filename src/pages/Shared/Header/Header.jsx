import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleTheme = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const navItems = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">INSTRUCTORS</NavLink>
      </li>
      <li>
        <NavLink to="/classes">CLASSES </NavLink>
      </li>
      {user ? (
        <>
          <li>
            {isAdmin ? (
              <NavLink to="/dashboard/admin-home">DASHBOARD</NavLink>
            ) : isInstructor ? (
              <NavLink to="/dashboard/instructor-home">DASHBOARD</NavLink>
            ) : (
              <NavLink to="/dashboard/student-home">DASHBOARD</NavLink>
            )}
          </li>
          <li className="block md:hidden">
            <NavLink onClick={logOut} to="/">
              Sign Out
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );

  const toggle = (
    <>
      <label className="swap swap-rotate ms-5 ">
        {/* this hidden checkbox controls the state */}
        <input onChange={handleTheme} type="checkbox" />

        {/* sun icon */}
        <svg
          className="swap-on fill-current w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-off fill-current w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  );
  return (
    <div
      className="navbar fixed z-10 bg-[#A6C9FF]
     text-black md:px-[8%]"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm font-bold dropdown-content  mt-3 p-2 shadow bg-gray-500  rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-8 md:w-12" src={logo} alt="" />
          <div>
            <span className="px-0 text-lg  md:text-2xl tracking-[0.18rem] font-extrabold ">
              Athlete<span className="text-purple-600">Xcel</span>
            </span>
            <br />
            <span className=" hidden md:block font-semibold ">Ding! Dong Sports is calling</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold  px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          user?.photoURL ? (
            <>
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                data-toggle="tooltip"
                title={user?.displayName}
                placement="bottom"
                src={`${user?.photoURL}`}
                alt=""
              />
              {toggle}
            </>
          ) : (
            <>
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                data-toggle="tooltip"
                title={user?.displayName}
                placement="bottom"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1685422406~exp=1685423006~hmac=e59b31bb2d641320f0cbcf5687b1c566606e735e651c1a9963ef78acdf217c56"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                data-toggle="tooltip"
                title={user?.displayName}
                placement="bottom"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1685422406~exp=1685423006~hmac=e59b31bb2d641320f0cbcf5687b1c566606e735e651c1a9963ef78acdf217c56"
                alt=""
              />
              {toggle}
            </>
          )
        ) : (
          <>
            <Link
              className="btn bg-[#0F7BF2] text-white hover:text-black border border-[#0F7BF2] hover:border-[#0F7BF2]"
              to="/signin"
            >
              SIGN IN
            </Link>
            {toggle}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
