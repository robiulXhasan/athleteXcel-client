import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/instructors">INSTRUCTORS</Link>
      </li>
      <li>
        <Link to="/classes">CLASSES </Link>
      </li>
      <li>
        <Link to="">DASHBOARD</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white md:px-[8%]">
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
            className="menu menu-sm dropdown-content text-black mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <span className="px-0 text-xs  md:text-xl tracking-[0.16rem] font-bold ">
            SPORTS ACADEMIES
          </span>
          <br />
          <span className=" hidden md:block font-semibold ">Ding! Dong Sports is calling</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          className="btn bg-[#0F7BF2] text-white hover:text-black border border-[#0F7BF2] hover:border-[#0F7BF2]"
          to="/signin"
        >
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
