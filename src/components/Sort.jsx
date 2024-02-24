import React from "react";

function Sort({handleChange}) {
  return (
    <div>
      <select className="dropdown" onChange={handleChange}>
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
