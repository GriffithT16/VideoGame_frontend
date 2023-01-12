import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Platform", "Sales", { role: "style" }],
    ["PS3", 8.94, "gold"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "blue"], // CSS-style declaration
  ];
  
const DisplayPlatformStats = (videoGames) => {

    function generateDataFormChart(){

        console.log(videoGames);

        let filteredGames = videoGames.filter(game => game.year > 2013);

        console.log(filteredGames);

        const data = [
            ["Platform", "Sales", { role: "style" }],
            ["PS3", 8.94, "gold"], // RGB value
            ["Silver", 10.49, "silver"], // English color name
            ["Gold", 19.3, "gold"],
            ["Platinum", 21.45, "blue"], // CSS-style declaration 
        ];

        return data;
    }

    return ( 
        <div>
            <h1>Global sales chart</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
        </div>
     );
}
 
export default DisplayPlatformStats;