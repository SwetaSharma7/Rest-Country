import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "./Darkmode";


function Search({ handleSearch }) {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? "search search-DM" : "search"}>
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input input="text" placeholder="Search for a Country" className={isDarkMode ? "search-input search-DM" : "search-input"} onKeyUp={handleSearch}></input>
    </div>
  );
}

export default Search;
