import React from "react";
import Search from "./Search";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function MainComponent() {
  const [countriesData, setCountriesData] = useState([]);
//   const [cards, setCards] = useState()

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
  console.log(regSubReg)



  return (
    <div>
      <Search />
      <Cards countriesData={countriesData}/>
      MainComponent
    </div>
  );
}

export default MainComponent;





// useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         setCountriesData(data);
//       });
//   }, []);
  
//   const regSubReg = countriesData.reduce((acc, cv) => {
//     if (!acc[cv.region]) {
//       acc[cv.region] = [cv.subregion];
//     } else {
//       if (!acc[cv.region].includes(cv.subregion)) {
//         acc[cv.region].push(cv.subregion);
//       }
//     }
//     return acc;
//   }, {});
  
//   console.log(regSubReg);
  

// useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         setCountriesData(data);
//         const arr = Object.keys(
//           data.reduce((acc, cv) => {
//             if (!acc[cv.region]) {
//               acc[cv.region] = 1;
//             }
//             return acc;
//           }, {})
//         );
//         setRegion(arr);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
