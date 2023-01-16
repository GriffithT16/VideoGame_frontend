import { useNavigate } from "react-router-dom";
import SearchedChart from "./SearchedChart";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

// add data visualization of the number of copies sold per console when a game is searched
//{
//     "id": 1,
//     "game_rank": 11,
//     "name": "Nintendogs",
//     "platform": "DS",
//     "year": 2005,
//     "genre": "Simulation",
//     "publisher": "Nintendo",
//     "northamericasales": 9.07,
//     "europesales": 11.0,
//     "japansales": 1.93,
//     "othersales": 2.75,
//     "globalsales": 24.76
// },
// export const data = [
//   ["Element", "Density", { role: "style" }],
//   ["Copper", 8.94, "#b87333"], // RGB value
//   ["Silver", 10.49, "silver"], // English color name
//   ["Gold", 19.3, "gold"],
//   ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
// ];

// export default function CopiesByConsole({ videoGames, searchedGames }) {
//   // !Working here!

//   // let newPlatform = searchedGames.map((el, specificPlatform) => {

//   let matchedPlatforms = searchedGames.map((el, specificPlatforms) => {
//     specificPlatforms = searchedGames.map((el) => {
//       return el.platform;
//     });
//     let specificPlatform = [...new Set(specificPlatforms)];
//     for (let i = 0; i < specificPlatform.length; i++) {
//       if (el.platform == i) {
//         console.log("el :", el.globalsales);
//         return el;
//       }
//     }
//     console.log("specific :", specificPlatform);
//   });
//   console.log("matchedPlatforms :", matchedPlatforms);

//   let specificSales = searchedGames.map((el) => {
//     return el.globalsales;
//   });
export default function GetAll({ searchedGames }) {
  function generateDataFormChart() {
    
    let filteredGames = searchedGames.filter((el) => el.year >= 1965);

    
    let platforms = filteredGames.map((el) => {
      return el.platform;
    });
    console.log(platforms);

    //remove duplicates using set constructor and spread syntax (ex: [...new Set(array)]);

    let distinctplatforms = [...new Set(platforms)];

    let globalSalesSum = distinctplatforms.map((game) => {
      let sum = 0;
      return (sum += game.globalsales);
    });

    let platformArrays = distinctplatforms.map((platform) => {


      let allGamesForPlatform = filteredGames
        .filter((game) => game.platform == platform)
        .map((game) => game.globalsales);

      let initialValue = 0;

      let globalSalesPerConsole = allGamesForPlatform.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );

      // globalSalesPerConsole = Math.round(globalSalesPerConsole);
      // console.log("globalSalesPerConsole", globalSalesPerConsole);

      return [platform, globalSalesPerConsole, "darkturquoise"];
    });

    const data = [["Platform", "Sales", { role: "style" }], ...platformArrays];
    console.log("Data", data);

    return data;
  }

  return (
    <div>
      <h1 style={{ margin: "1rem" }} className="font-link title">
        Number of Copies Sold per Console
        <small className="text-muted font-link"> In Millions</small>
      </h1>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
    </div>
  );
}
