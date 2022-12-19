import React, { useContext, useEffect } from "react";
import PreviewImage from "./PreviewImage";
import { IGFiltersArray } from "../utils/Instagram-filters";
import "../utils/Instagram.min.css";
import PhotoContext from "../context/PhotoContext";

const IGShowFilters = () => {
  const {
    imageFile,
    setFilterClass,
    filterClass,
    isFilterSelected,
    setIsFilterSelected,
    isCustom, 
    setIsCustom
  } = useContext(PhotoContext);

  useEffect(() => {
    setIsFilterSelected(isFilterSelected);
    setIsCustom(false)
  }, []);
  return (
    <div className=" pt-2 pb-4 w-full h-full  grid gap-6 grid-cols-3  ">
      {IGFiltersArray.map((IGFilter) => (
        <PreviewImage
          imageFile={imageFile}
          filterClass={filterClass}
          setFilterClass={setFilterClass}
          key={IGFilter.filter}
          filter={IGFilter.filter}
          name={IGFilter.name}
        />
      ))}
    </div>
  );
};

export default IGShowFilters;
