
import { Chart } from "react-google-charts";
import React, { useState } from 'react';




export const data = [
  [["Country", "Sales"], ...salesArray]
  ["Germany", 2000],
  ["Russia", 2000],
  ["United Kingdom", 2000],
  ["France", 2000],
  ["Italy", 2000],
  ["Spain", 2000],
  ["Ukraine", 2000],
  ["Poland", 2000],
  ["Romania", 2000],
  ["Netherlands", 2000],
  ["United States", 2000],
  ["Japan", 1000] 
  
// const data = [["Platform", "Sales", { role: "style" }], ...platformArrays];
// console.log("Data", data);

// return data;

];

export const options = {
    // region: "002", // Africa
    colorAxis: { colors: ['lightblue', '#1E90FF', '#00308F'] },
    backgroundColor: "white",
    datalessRegionColor: "beige",
    defaultColor: "blue",
  };
  

export default function CustomChart({videoGames}) {

    function generateCustomChartData(){
        
        let countriesArray = []

        let japanSales = videoGames.map((el) => {  
            return el.japansales;
                  
    });
    let initialValue = 0;
    let totalJapanSales = japanSales.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      
      totalJapanSales = Math.round(totalJapanSales);
    //   debugger;      
      console.log("totalJapanSales", totalJapanSales);


  return (
    <div>
      <h1>Total Sales By Country</h1>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

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