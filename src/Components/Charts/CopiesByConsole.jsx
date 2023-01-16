
import React, { useState } from 'react';
import { useLocation } from "react-router-dom"
import { Chart } from "react-google-charts";
import axios from "axios";


// add data visualization of the number of copies sold per console when a game is searched




export default function CopiesByConsole({ searchedGames, featuredVideo, setFeaturedVideo}) {




  
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

      return [platform, globalSalesPerConsole, "light blue"];
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
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()}/>
      {/* <button className = 'button-51' onClick={() => handleClick()}>Stats</button> */}
    </div>
  );
}
