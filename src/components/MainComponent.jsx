import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Sort from "./Sort";
import Detail from "./Detail";
import { Routes, Route } from "react-router-dom";

function MainComponent() {
  const [countriesData, setCountriesData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");
  const [sortedData, setSortedData] = useState(null);
  const [currency, setcurrency] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  console.log(countriesData);

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

  const currencyObj = countriesData.reduce((acc, cv) => {
    if (cv.currencies) {
      const codeArr = Object.keys(cv.currencies);
      codeArr.forEach((code) => {
        if (!acc[code]) {
          acc[code] = cv.currencies[code].name;
        }
      });
    }
    return acc;
  }, {});

  // console.log(currencyObj)

  const filterCountries = countriesData
    .filter((country) => {
      if (country.name.common.toLowerCase().includes(searchInput.toLowerCase()) && country.region.includes(selectedRegion) && (selectedSubRegion === "" || country.subregion === selectedSubRegion)) {
        return true;
      }
      return false;
    })
    .sort((a, b) => {
      if (sortedData === "descPopulation") {
        return b.population - a.population;
      } else if (sortedData === "ascPopulation") {
        return a.population - b.population;
      } else if (sortedData === "descArea") {
        return b.area - a.area;
      } else if (sortedData === "ascArea") {
        return a.area - b.area;
      } else {
        return 0;
      }
    });

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
  };

  const handleChangeCurrency = (e) => {
    setcurrency(e.target.value);
  };

  // console.log(regSubReg[selectedRegion]);

  const Body = () => {
    return (
      <>
        <Search handleSearch={handleSearch} />
        <Dropdown dataArr={Object.keys(regSubReg)} handleChange={handleChangeRegion} />
        <Dropdown dataArr={selectedRegion ? regSubReg[selectedRegion] : []} handleChange={handleChangeSubRegion} />
        <Sort handleChange={handleSortDropDown} />
        <Dropdown dataArr={Object.values(currencyObj)} handleChange={handleChangeCurrency} />
        <Cards countriesData={filterCountries} />
      </>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/details/:id" element={<Detail />}></Route>
        <Route path="*" element={<h1>notFound</h1>}>
          Invalid Request
        </Route>
      </Routes>
    </div>
  );
}

export default MainComponent;
