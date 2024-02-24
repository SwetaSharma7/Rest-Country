import React from "react";

function Dropdown({ dataArr, handleChange }) {
  return (
    <>
      <select className="dropdown" onChange={handleChange}>
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
