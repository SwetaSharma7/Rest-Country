import React from "react";
import { useDarkMode } from "./Darkmode";

function CurrencyDropdown({dataArr, handleChange}) {
    const {isDarkMode} = useDarkMode();

    const curr = Object.values(dataArr)
  return (
    <>
      <select className={isDarkMode ? "dropdown dropdown-DM" : "dropdown"} onChange={handleChange}>
        <option value="" defaultValue>
          Filter By Currency
        </option>
        {curr.map((regionName, index) => (
          <option key={index} value={regionName}>
            {regionName}
          </option>
        ))}
      </select>
    </>
  );
}

export default CurrencyDropdown;
