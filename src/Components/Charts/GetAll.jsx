import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { Chart } from "react-google-charts";

//want to show number of game copies sold globally on all consoles since 2013
//   sample data point:
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

export default function GetAll({ videoGames }) {
  function generateDataFormChart() {
    //filter by year after 2013

    let filteredGames = videoGames.filter((el) => el.year >= 2013);

    //get platforms using a map function

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
      // allGamesForplatform = array of total amount of devices of each platform

      let allGamesForPlatform = filteredGames
        .filter((game) => game.platform == platform)
        .map((game) => game.globalsales);

    //   function getSum(total, num) {
    //     return total + Math.round(num);
    //   }

      let initialValue = 0;

      let globalSalesPerConsole = allGamesForPlatform.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );

      globalSalesPerConsole = Math.round(globalSalesPerConsole);
      console.log("globalSalesPerConsole", globalSalesPerConsole);

      return [platform, globalSalesPerConsole, "bright blue"];
    });

    const data = [["Platform", "Sales", { role: "style" }], ...platformArrays];
    console.log("Data", data);

    return data;
  }

  return (
    <div>
      <h1 style = {{'margin':'1rem'}}  className = 'font-link title'>Global Sales by Console
        <small className = 'text-muted font-link'> In Millions</small>
        </h1>      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDataFormChart()}
      />
    </div>
  );
}
