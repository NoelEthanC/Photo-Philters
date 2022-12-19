import React, { useState, useContext, useEffect } from "react";
import { custom } from "../utils/custom-filters";
import { Slider } from "@mui/material";
import PhotoContext from "../context/PhotoContext";
import SliderFiled from "./SliderFiled";

const CustomFilters = () => {
  const {
    customFilterStore,
    setCustomFilterStore,
    isFilterSelected,
    setIsFilterSelected,
    isCustom, setIsCustom
  } = useContext(PhotoContext);
  const [sliderCount, setSliderCount] = useState(custom);
  const [selectedFil, setSelectedFil] = useState();

  useEffect(() => {
    setIsFilterSelected(isFilterSelected);
    setIsCustom(true)
  }, []);

  const handleSliderChange = (e, newValue) => {
    const changedFilter = sliderCount[e.target.id];
    setSelectedFil(changedFilter);
    setSelectedFil({ ...selectedFil, ["value"]: newValue });
    setCustomFilterStore({
      ...customFilterStore,
      [e.target.name]: e.target.value,
    });
    console.log("sliderCount", selectedFil?.value);
    console.log(customFilterStore);
  };

  return (
    <div className="h-full px-2 py-4 flex flex-col justify-center items-center w-full">
      {custom.map((item) => (
        <SliderFiled
          slider={item}
          handleSliderChange={handleSliderChange}
          key={item.filterName}
        />
        // <section key={item.id} className="w-full">
        /* <p className="">{item.filterName}</p> */
        /* <Slider
            name={item.filterName}
            defaultValue={item.defaultValue}
            min={item.min}
            max={item.max}
            // getAriaValueText={(value)=>setSliderCount(value)}
            // getAriaValueText={handleSliderChange}
            step={10}
            value={selectedFil ? selectedFil.value : item.value }
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            className="cursor-pointer  w-full mx-auto "
          /> */
        // </section>
      ))}
    </div>
  );
};

export default CustomFilters;
