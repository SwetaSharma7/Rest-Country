import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input input="text"
      placeholder="Search for a Country"
      className="search-input">

      </input>
    </div>
  );
}

export default Search;
