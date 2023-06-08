import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="  bg-[#DFECFF] text-base-content  py-10 ">
      <div className=" footer px-10 md:px-[8%] bg-[#DFECFF] text-base-content">
        <div>
          <Link to="/" className="flex items-center  gap-2">
            <img className="w-16" src={logo} alt="" />
            <h3 className="text-2xl font-bold w-1/2">Sports Academies</h3>
          </Link>

          <p className=" opacity-80">Ding! Dong Sports is calling</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/alltoys" className="link link-hover">
            Home
          </Link>
          <Link to="/mytoys" className="link link-hover">
            Instructors
          </Link>
          <Link to="/addtoy" className="link link-hover">
            Classes
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blogs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Contact us on</span>
          <div className="flex items-center gap-2">Address: 102/d-block, Savar, Dhaka</div>
          <p>Phone: 0095667895</p>
          <div className="flex items-center gap-2">
            Social: <FaFacebookSquare /> <FaInstagramSquare /> <FaTwitterSquare />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <p className="text-center">Copyright © 2023 - All right reserved by Sports Academies</p>
    </footer>
  );
};

export default Footer;
