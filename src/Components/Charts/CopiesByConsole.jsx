import { useNavigate } from "react-router-dom";
import SearchedChart from "./SearchedChart";
import React, { useState } from 'react';
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
export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function CopiesByConsole({ videoGames, searchedGames }) {
  // !Working here!

  // let newPlatform = searchedGames.map((el, specificPlatform) => {

  let matchedPlatforms = searchedGames.map((el, specificPlatforms) => {
    specificPlatforms = searchedGames.map((el) => {
      return el.platform;
    });
    let specificPlatform = [...new Set(specificPlatforms)];
    for (let i = 0; i < specificPlatform.length; i++) {
      if (el.platform == i) {
        console.log("el :", el.globalsales);
        return el;
      }
    }
    console.log("specific :", specificPlatform)
  });
  console.log("matchedPlatforms :", matchedPlatforms);

  let specificSales = searchedGames.map((el) => {
    return el.globalsales;
  });

  // let distinctplatforms = [...new Set(platforms)];

  // let copiesPerConsole = videoGames.map((game) => {
  //     game.platform == platform
  // }

  //     ).map((game) => game.globalsales);
  // });
  // console.log(copiesPerConsole);

  // let platformArrays = distinctplatforms.map((platform) => {
  //     // allGamesForplatform = array of total amount of devices of each platform

  //     let allGamesForPlatform = filteredGames
  //       .filter((game) => game.platform == platform)
  //       .map((game) => game.globalsales);

  return ( 
  <div>
     <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  </div>
  )
}


