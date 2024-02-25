import React from "react";

function CurrencyDropdown({dataArr, handleChange}) {
    const curr = Object.values(dataArr)
  return (
    <>
      <select className="dropdown" onChange={handleChange}>
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
