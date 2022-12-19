import React, { useState, useContext, useRef } from "react";
import { Slider } from "@mui/material";
import PhotoContext from "../context/PhotoContext";
import { BiReset } from "react-icons/bi ";
import CustomFilters from "./CustomFilters";

const SliderFiled = ({ slider }) => {
  const { customFilterStore, setCustomFilterStore } = useContext(PhotoContext);
  const resetRef = useRef(null);
  const { filterName, defaultValue, max, min } = slider;
  const [value, setvalue] = useState(defaultValue);

  const handleReset = (e) => {
    // setvalue(e.target.value);
    resetRef.current.focus();
    // setCustomFilterStore({
    //   ...customFilterStore,
    //   [e.target.name]: value,
    // });
    setCustomFilterStore({
      ...customFilterStore,
      [e.target.name]: min,
    });
    console.log(customFilterStore);
  };

  const handleSliderValue = (e) => {
    setvalue(e.target.value);
    setCustomFilterStore({
      ...customFilterStore,
      [e.target.name]: value,
    });
    console.log(customFilterStore);
  };
  return (
    <div className="w-full  h-full">
      <section className="grid grid-cols-4 lg:grid-cols-1 ">
        <p className="w-1/4 text-gray-800 lg:text-indigo-100 ">{filterName}</p>

        <Slider
          name={filterName}
          max={max}
          min={min}
          size="small"
          step={1}
          defaultValue={defaultValue}
          value={value}
          valueLabelDisplay="auto"
          onChange={handleSliderValue}
          ref={resetRef}
          className='col-span-3 '
        />
      </section>
    </div>
  );
};

export default SliderFiled;
