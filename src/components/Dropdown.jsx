import React from "react";
import { useDarkMode } from "./Darkmode";

function Dropdown({ dataArr, handleChange }) {
  const { isDarkMode} = useDarkMode();
  return (
    <>
      <select className={isDarkMode ? "dropdown dropdown-DM" : "dropdown"} onChange={handleChange}>
        <option value="" defaultValue>
          Filter By Region
        </option>
        {dataArr.map((regionName, index) => (
          <option key={index} value={regionName}>
            {regionName}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
