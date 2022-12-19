import React from "react";
import Editor from '../components/Editor';
import Sidebar from "../components/Sidebar";

const PhotoEdit = () => {
  return (
    <div className="md:flex w-full h-screen ">
      <Sidebar />
      <Editor />
    </div>
  );
};

export default PhotoEdit;
