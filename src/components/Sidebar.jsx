import React, { useState, useContext } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle, FiHome } from "react-icons/fi";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  BsUpload,
} from "react-icons/bs";
// import Logo from "../assets/photo-file-logo-2.jpg";
import { NavLink, Link, Outlet } from "react-router-dom";
import { AiOutlineUndo } from "react-icons/ai";
import PhotoContext from "../context/PhotoContext";

const Sidebar = () => {
  const [isNavOpen, setisNavOpen] = useState(true);
  const { isFilterSelected, setIsFilterSelected } = useContext(PhotoContext);
  const handleNavOpen = (e) => {
    setisNavOpen(!isNavOpen);
  };

  const preOutlet = () => {
    return (
      <p className='text-gray-600 lg:text-gray-100 lg:mt-24 ' >
        Select any type of filters by clicking{" "}
        <Link to="igfilters" onClick={()=>setIsFilterSelected(true)} >
          <button className="cursor-pointer  underline border-gray-300  text-indigo-500 rounded text-center px-2 lg:border-gray-500 lg:text-indigo-500  py-2 hover:bg-gray-600 ">
            IG Filters
          </button>
        </Link>

        OR
        <Link to="custom" onClick={()=>setIsFilterSelected(true)}>
          <button className="cursor-pointer underline  border-gray-300 text-indigo-500 rounded text-center px-2  py-2 hover:bg-gray-400">
            Customize
          </button>
        </Link>
      </p>
    );
  };
  return (
    <div className=" lg:w-1/4 ">
      <ul className="hidden lg:block  bg-gray-800/80 md:h-screen overflow-auto  text-xl items-center pt-[4px] px-4 drop-shadow-lg text-indigo-100   tracking-wide ">
        <li className="p-4 uppercase cursor-pointer w-full border-b text-gray-100   ">
          PhotoFil
        </li>
        <Link to="/">
          <li className="py-4 px-8 cursor-pointer inline-flex space-x-4 w-full items-center text-gray-100  hover:bg-indigo-600 hover:rounded-md  hover:px-8 hover:py-4 hover:w-full ">
            <FiHome className="text-gray-400  " />
            <span>Home</span>
          </li>
        </Link>
        <li className="py-4 px-8 w-full cursor-pointer inline-flex space-x-4  items-center   text-gray-100 hover:bg-indigo-600 hover:rounded-md  hover:px-8 hover:py-4  hover:w-full ">
          <BsUpload className="text-gray-400  " />
          <span>Upload</span>
        </li>
        {/* <li className="py-4 w-full px-8 cursor-pointer  text-gray-100  inline-flex space-x-4  items-center hover:bg-indigo-600 hover:rounded-md  hover:px-8 hover:py-4 hover:w-full">
          <AiOutlineUndo className="text-gray-400  " />
          <span>Undo</span>
        </li> */}

        <li className=" flex bg-gray-700 items-center justify-center   mx-auto w-full text-xl uppercase text-center    ">
          <NavLink
            to="igfilters"
            className={({ isActive }) =>
              isActive
                ? `text-gray-200 w-1/2 border-b-2 cursor-pointer border-gray-400 p-3 text-center bg-gray-600  pl-`
                : ` w-1/2 text-center pl- hover:bg-gray-600 p-3  text-blue-300 `
            }
          >
            <h4 className="">IG Filters</h4>
          </NavLink>
          <span className="text-gray-600">|</span>
          <NavLink
            to="custom"
            className={({ isActive }) =>
              isActive
                ? `text-gray-200 p-3  border-b-2 cursor-pointer border-gray-400  text-center  bg-gray-600  `
                : `text-center p-3  hover:bg-gray-600 text-blue-300 `
            }
          >
            Customize
          </NavLink>
        </li>
        <li className="">
          {isFilterSelected ? <Outlet />: preOutlet() }

        </li>
      </ul>
      {/* mobile div */}
      <div className="flex bg-white drop-shadow-md w-full relative px-6 items-center  h-20 justify-between lg:hidden">
        {/* <img src={Logo} className="object-contain h-20 " alt="" /> */}
        <div className=" flex items-center gap-x-4 ">
          <Link to="igfilters">
            <button className="   cursor-pointer border border-gray-300 shadow-md text-indigo-500 rounded text-center px-2  py-2 hover:bg-gray-600 ">
              IG Filters
            </button>
          </Link>
          <Link to="custom">
            <button className="cursor-pointer border border-gray-300 shadow-md text-indigo-500 rounded text-center px-2  py-2 hover:bg-gray-400">
              Customize
            </button>
          </Link>
          <Link to="/">
            <button className=" px-2 py-2 bg-indigo-500 rounded drop-shadow-md text-white hover:animate-pulse hover:scale-200 focus:appearance-none  ">
              Home
            </button>
          </Link>
        </div>
      </div>

      <div
        className={
          isNavOpen
            ? `  lg:hidden md:h-screen shadow-xl absolute border-r duration-300  ease-in-out translate-y-0 text-indigo-800 bg-indigo-200 h-[15%] w-full flex `
            : ` lg:hidden h-screen border-r    w-full flex absolute  duration-300 ease-in-out translate--[26%] top-[-100%]  `
        }

        //
      >
        {isNavOpen ? (
          <BsFillArrowUpCircleFill
            onClick={handleNavOpen}
            size={34}
            className="absolute ease-in duration-400 translate-x-0 cursor-pointer focus:animate-spin font-bold hover:scale-100 animate-bounce text-indigo-900 right-0 top-[100px] "
          />
        ) : (
          <BsFillArrowDownCircleFill
            onClick={handleNavOpen}
            size={34}
            className="fixed ease-in duration-400 translate-x-[-100%] focus:animate-spin cursor-pointer font-bold hover:scale-100 animate-bounce text-indigo-900 right-[30px] top-[76px] "
          />
        )}
        <ul className=" text-gray-200 h-full overflow-auto  md:h-screen overflow-aut  w-full  text-xl items-center md:pt-[82px] px-4  absolute  tracking-wide ">
          {/*<li className="py-4 border-b  mx-auto bg-white   w-full text-xl uppercase text-center   text-gray-100   ">
            <span className="w-full flex ">
              <Link to="igfilters" className="pl-4  ">
                <h4 className=" border fixed cursor-pointer border-gray-700 rounded text-center px-2 hover:bg-gray-600 hover:">
                  IG Filters
                </h4>
              </Link>
              <Link to="custom">
                <h4 className="border cursor-pointer border-gray-700 rounded text-center px-2 hover:bg-gray-600  hover:">
                  Customize
                </h4>
              </Link>
            </span>
        </li> */}
          <li className=" w-full ">
            {isFilterSelected ? <Outlet />: preOutlet() }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
