import React from "react";
import mountain from "../assets/mountain.jpg";
import "../utils/Instagram.min.css";

const PreviewImage = ({ name, filter, imageFile, setFilterClass }) => {
  return (
    <figure
      onClick={() => setFilterClass(filter)}
      className="h-12  rounded shadow text-indigo-800 lg:text-indigo-200 font-bold hover:scale-105 hover:ease-in-out hover:duration-200  "
    >
      <fig className="cursor-pointer  h-[75%] bo ">
        <img
          onClick={() => setFilterClass(filter)}
          src={imageFile ? imageFile : mountain}
          alt="/"
          className={` ${filter}  w-full object-cover h-full `}
        />
      </fig>
      <figcaption className=" text-center text-sm">{name}</figcaption>
    </figure>
  );
};

export default PreviewImage;
