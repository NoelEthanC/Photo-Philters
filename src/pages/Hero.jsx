import React from "react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import pic1 from "../assets/blue-ribbon.png";
import pic2 from "../assets/random-dots.png";
import Card from "../components/Card";

const Hero = () => {
  return (
    <div className=" w-full bg-gradient-to-tl overflow-hidden  via-transparent px-2 mt-[-140px] md:mt-[-98px] from-indigo-800/25 to-indigo-800/30 h-screen flex flex-col  justify-center items-center ">
      {/* <div className=" absolute ml-[-60px]">
        <img
          src={pic2}
          alt="/"
          className="bg-cover bg-left-bottom  w-1/4  "
        />
      </div> */}

      <div className=" md:px-16 md:w-3/5 md:mt-[-40px] w-full  text-center">
        <h1 className="text-gray-900 grid lg:block space-y-2 text-4xl md:text-6xl font-bold text-center   ">
          <span className="">Extend the feel of your 
          
          <span className="text-indigo-500  "> photos </span>
          </span>
          <span className="">with a click</span>
        </h1>

        <h3 className="text-gray-700 md:w-3/5 mx-auto mt-5 p-2 md:text-2xl text-xl">
          Apply and Customize Filters on your photos and make them ready for
          sharing everywhere.
        </h3>
      </div>

      {/* <img src={pic1} className='object-contain mx-auto h-52' alt='/' /> */}
      <Link to={`/photo-edit`} >
      <button className="  px-4 mt-8 md:mt-2 py-3 mx-auto cursor-pointer bg-indigo-500 rounded  drop-shadow-lg text-white  hover:scale-200 focus:appearance-none  ">
        Get Started
      </button>
      </Link>
      {/* <div className="mb-16"></div> */}
      <div className="bottom-12 w-full  justify-around md:bottom-8 absolute md:space-x-32 md:justify-center m flex">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Hero;
