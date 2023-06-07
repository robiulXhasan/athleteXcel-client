import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="">INSTRUCTORS</Link>
      </li>
      <li>
        <Link to="/">CLASSES </Link>
      </li>
      <li>
        <Link to="">DASHBOARD</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-purple-200 md:px-[8%]">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
        <Link className="btn bg-[#E39FF6] font-bold" to="/login">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
