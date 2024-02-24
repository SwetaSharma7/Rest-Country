import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Sort from "./Sort";

function MainComponent() {
  const [countriesData, setCountriesData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");
  const [sortedData, setSortedData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  // console.log(countriesData);

  const regSubReg = countriesData.reduce((acc, cv) => {
    if (!acc[cv.region]) {
      acc[cv.region] = [cv.subregion];
    } else {
      if (!acc[cv.region].includes(cv.subregion)) {
        acc[cv.region].push(cv.subregion);
      }
    }
    return acc;
  }, {});

  const filterCountries = countriesData.filter((country) => {
    if (country.name.common.toLowerCase().includes(searchInput.toLowerCase()) && country.region.includes(selectedSubRegion)) {
      return true;
    }
    return false;
  })
  .sort((a, b) => {
    if(sortedData === 'descPopulation'){
      return b.population - a.population;
    }else if(sortedData === 'ascPopulation'){
      return a.population - b.population;
    }else if(sortedData === 'descArea'){
      return b.area - a.area
    }else if(sortedData === 'ascArea'){
      return a.area - b.area;
    }else{
      return 0;
    }
  })

  const handleChangeRegion = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleChangeSubRegion = (e) => {
    setSelectedSubRegion(e.target.value);
  };

  const handleSortDropDown = (e) => {
    setSortedData(e.target.value);
  }

  console.log(regSubReg[selectedRegion]);

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Dropdown dataArr={Object.keys(regSubReg)} handleChange={handleChangeRegion} />
      <Dropdown dataArr={selectedRegion? regSubReg[selectedRegion] : []} handleChange={handleChangeSubRegion} />
      <Sort handleChange={handleSortDropDown}/>
      <Cards countriesData={filterCountries} />
    </div>
  );
}

export default MainComponent;
