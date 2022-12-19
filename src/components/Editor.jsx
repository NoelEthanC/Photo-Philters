import React, { useRef, useContext } from "react";
import { BsDownload } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import EditorNav from "./EditorNav";
import PhotoContext from "../context/PhotoContext";
import "../utils/Instagram.min.css";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const Editor = () => {
  const {
    setImageFile,
    imageFile,
    filterClass,
    customFilterStore,
    isCustom,
    setIsCustom,
  } = useContext(PhotoContext);
  const imgResultRef = useRef(null);
  const {
    blur,
    contrast,
    hueRotate,
    brightness,
    grayscale,
    invert,
    saturate,
    sepia,
  } = customFilterStore;
  const imageRef = useRef(null);
  const handleImageUpload = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
    console.log(customFilterStore);
  };

  const downloadImage = () => {
    console.log("imgResultRef", imgResultRef);
    domtoimage
      .toBlob(imgResultRef.current)
      .then(function (blob) {
        saveAs(blob, "img-filters.png");
      })
      .catch(function (error) {
        console.log("oops somthing went wrong", error);
      });
  };

  return (
    <div className="lg:w-3/4 w-full lg:h-screen b h-[86vh]  overflow-hidden ">
      <EditorNav imageRef={imageRef} imageFile={imageFile} />
      <section
        onClick={() => imageRef.current && imageRef.current.click()}
        className="bg-gray-300 w-[90%] lg:text-lg lg:w-[70%]  mx-auto text-indigo-600 font-bold tracking-wide cursor-pointer mt-28 lg:mt-0 m-4 h-[70%] flex justify-center  items-center"
      >
        {imageFile ? (
          <figure className="h-full w-full p-4 flex items-center border-dotted border-2  justify-center ">
            {isCustom ? (
              <img
                style={{
                  filter: `blur(${blur}px) brightness(${brightness}%)  contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%)  `,
                }}
                src={imageFile}
                ref={imgResultRef}
                alt="/"
                className={`  object-contain  `}
              />
            ) : (
              <img
                className={`  ${filterClass} object-contain  `}
                src={imageFile}
                ref={imgResultRef}
                alt="/"
              />
            )}
          </figure>
        ) : (
          <p className="hover:underline">CLICK HERE TO UPLOAD YOUR PHOTO</p>
        )}
      </section>
      <input
        type="file"
        onChange={handleImageUpload}
        accept="image/*"
        hidden
        ref={imageRef}
      />
      <div className="w-full  flex justify-center  ">
        <button
          onClick={downloadImage}
          className=" w-[90%] lg:w-[70%] shadow-lg  rounded justify-center mx-auto bg-indigo-600  items-center gap-x-2 text-white px-4 py-2 inline-flex "
        >
          <FiDownload />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default Editor;
