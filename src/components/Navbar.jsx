import React, { useState, useContext } from "react";
// import Logo from "../assets/photo-file-logo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import PhotoContext from "../context/PhotoContext";

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const { setIsFilterSelected } = useContext(PhotoContext);
  const handleNavOpen = (e) => {
    setisNavOpen(!isNavOpen);
  };
  return (
    <div className="bg-white">
      <div className="w-[1200px] hidden border-b  h-24 justify-around bg-origin-border  p-4 lg:flex mx-auto items-center  ">
        <div className="">
          <p className="text-4xl font-bold text-gray-700 ">
            Photo<span className="text-indigo-700">Fil</span>
          </p>
          {/* <img src={Logo} className="object-contain h-24 rounded-full shadow-xl  " alt="" /> */}
        </div>

        <ul className="flex items-center text-lg  tracking-wide ">
          <Link to="/">
            <li className="p-4 cursor-pointer text-gray-500 ">Home</li>
          </Link>
          <Link to="photo-edit/igfilters" onClick={setIsFilterSelected(true)}>
            <li className="p-4 cursor-pointer text-gray-500 ">Filter</li>
          </Link>
        </ul>
        <Link to="/photo-edit">
          <button className=" px-4 py-2 bg-indigo-500 rounded drop-shadow-md text-white hover:animate-pulse hover:scale-200 focus:appearance-none  ">
            Edit Photo
          </button>
        </Link>
      </div>

      {/*mobile Nav*/}

      <div className="flex bg-white drop-shadow-md w-full  px-6 items-center static h-20 justify-between lg:hidden">
        <p className="text-4xl font-bold text-gray-700 ">
          Photo<span className="text-indigo-700">Fil</span>
        </p>

        {/* <img src={Logo} className="object-contain h-20 " alt="" /> */}
        <Link to="/photo-edit">
          <button className=" px-2 py-2 bg-indigo-500 rounded drop-shadow-md text-white hover:animate-pulse hover:scale-200 focus:appearance-none  ">
            Edit Photo
          </button>
        </Link>
      </div>

      {/* <div
        className={
          isNavOpen
            ? `  lg:hidden h-screen border-r duration-300 durati ease-in-out translate-x-0  bg-indigo-600  drop-shadow w-3/4 flex fixed`
            : `  lg:hidden h-screen border-r  bg-indigo-400/25  drop-shadow-lg w-3/4 flex fixed  duration-300 ease-in-out translate-x-[-100%] `
        }
      >
        {isNavOpen ? (
          <BsFillArrowLeftCircleFill
            onClick={handleNavOpen}
            size={34}
            className="absolute ease-in duration-400 translate-x-0 cursor-pointer focus:animate-spin font-bold hover:scale-100 animate-bounce text-indigo-900 right-[-16px] top-[86px] "
          />
        ) : (
          <BsFillArrowRightCircleFill
            onClick={handleNavOpen}
            size={34}
            className="absolute ease-in duration-400 translate-x-[-100%] focus:animate-spin cursor-pointer font-bold hover:scale-100 animate-bounce text-indigo-900 right-[-30px] top-[86px] "
          />
        )}
        <ul className=" text-2xl items-center pt-[86px] absolute text-center text-indigo-100 w-full  tracking-wide ">
          <li className="p-4 cursor-pointer border-b border-indigo-600  ">
            Home
          </li>
          <li className="p-4 cursor-pointer border-b border-indigo-600  ">
            Filter
          </li>
          <li className="p-4 cursor-pointer border-b border-indigo-600 ">
            Customs
          </li>
          <li className="p-4 cursor-pointer border-b border-indigo-600  ">
            Get Started
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
