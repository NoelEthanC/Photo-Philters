import React from "react";
import pic2 from "../assets/random-dots.png";

const Card = () => {
  return (
    <div className="md:h-36 md:w-36 h-28 w-28 bg-white   rounded-md shadow-xl ">
      <img src={pic2} alt="" className="bg-cover h-1/2 w-full " />
      <section className='text-center bg-white rounde-b-md' >

      <h1 className="text-indigo-600  font-bold">Apply Filters</h1>
      <h1 className="text-sm">Instagram Filters</h1>
      </section>
    </div>
  );
};

export default Card;
