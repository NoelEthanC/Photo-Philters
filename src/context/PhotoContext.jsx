import React, { useState, useEffect, createContext, useContext } from "react";

const PhotoContext = createContext();

const filtersDefaults = {
  blur: 0,
  hueRotate: 0,
  brightness: 100,
  contrast: 100,
  saturate: 100,
  invert: 0,
  grayscale: 0,
  sepia: 0,
};

export const PhotoProvider = ({ children }) => {
  const [imageFile, setImageFile] = useState(null);
  const [filterClass, setFilterClass] = useState("");
  const [isCustom, setIsCustom] = useState(false)
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const [customFilterStore, setCustomFilterStore] = useState(filtersDefaults);
  const data = {
    imageFile,
    filterClass,
    customFilterStore,
    isFilterSelected,
    isCustom, 
    setIsCustom,
    setImageFile,
    setFilterClass,
    setCustomFilterStore,
    setIsFilterSelected
  };
  return <PhotoContext.Provider value={data}>{children}</PhotoContext.Provider>;
};
export default PhotoContext;
