import React from "react";
import { useDarkMode } from "./Darkmode";

function Sort({handleChange}) {
  const { isDarkMode } = useDarkMode();
  return (
    <div>
      <select className={isDarkMode ? "dropdown dropdown-DM" : "dropdown"} onChange={handleChange}>
        <option value="" defaultValue>
          Sort
        </option>
        <option value="descPopulation">Descending order of Population</option>
        <option value="ascPopulation">Ascending order of Population</option>
        <option value="descArea">Descending order of Area</option>
        <option value="ascArea">Ascending order of Area</option>
      </select>
    </div>
  );
}

export default Sort;
