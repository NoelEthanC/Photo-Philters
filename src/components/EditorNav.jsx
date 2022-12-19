import React, { useContext } from "react";
import { AiOutlineUndo } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { IoIosOpen, IoIosTrash, IoIosUndo, IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import PhotoContext from "../context/PhotoContext";

const EditorNav = ({ imageRef, imageFile }) => {
  const { setImageFile } = useContext(PhotoContext);

  const handleFileRemoval = () => {
    if (imageFile) {
      setImageFile(null);
    }
  };
  const handleReplace = () => {
    if (imageFile) {
      imageRef.current && imageRef.current.click();
    }
  };

  return (
    <div
      className="md:h-[10%] h-[50%] drop-shadow-xl absolute md:static w-[8%] px-1 text-center  md:mt-0 mt-36 md:ml-0 ml-1 lg:mt-4  shadow-lg md:w-3/5 lg:mx-auto  lg:mb-4 d items-center bg-gray-700/70 lg:bg-gray-700 rounded-full lg:flex grid lg:w-[70%] justify-around 
    text-gray-400 "
    >
      <Link to="/">
        <div className="flex hover:text-gray-300  items-center p-2 cursor-pointer flex-col ">
          <FiHome size={22} className="text-gray-400  " />
          <span className="text-xs">Home</span>
        </div>
      </Link>

      <div className=" grid lg:flex   items-center p-1">
        <span
          onClick={handleReplace}
          className="p-2 text-center  hover:text-gray-300 cursor-pointer "
        >
          <IoMdOpen size={24} />
          <p className="text-xs">replace</p>
        </span>
        <span
          onClick={handleFileRemoval}
          className="p-2 hover:text-gray-300  cursor-pointer"
        >
          <IoIosTrash size={24} />
          <p className="text-xs">remove</p>
        </span>
      </div>
    </div>
  );
};

export default EditorNav;
