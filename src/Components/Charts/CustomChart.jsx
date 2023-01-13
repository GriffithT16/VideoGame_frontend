
import { Chart } from "react-google-charts";
import React, { useState } from 'react';




// export const data = [
//   [["Country", "Sales"], ...salesArray]
//   ["Germany", 2000],
//   ["Russia", 2000],
//   ["United Kingdom", 2000],
//   ["France", 2000],
//   ["Italy", 2000],
//   ["Spain", 2000],
//   ["Ukraine", 2000],
//   ["Poland", 2000],
//   ["Romania", 2000],
//   ["Netherlands", 2000],
//   ["United States", 2000],
//   ["Japan", 1000] 

// ];

export const options = {
    // region: "002", // Africa
    colorAxis: { colors: ['#0c56bc', '#1E90FF', '#00308F'] },
    backgroundColor: "white",
    datalessRegionColor: "lightblue",
    defaultColor: "blue",
  };
  

export default function CustomChart({videoGames}) {

  function getJapanSales(){
      let japanSales = videoGames.map((el) => {  
        return el.japansales;    
    });
        let initialValue = 0;
        let totalJapanSales = japanSales.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
          );
          return totalJapanSales = Math.round(totalJapanSales);

  }

  function getNorthAmSales(){
    let northAmSales = videoGames.map((el) => {  
      return el.northamericasales;
  });
      let initialValue = 0;
      let totalNorthAmSales = northAmSales.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue
        );
        totalNorthAmSales = Math.round(totalNorthAmSales/3);
        
        return totalNorthAmSales; 
  }

  function getEuSales(){
    let eUSales = videoGames.map((el) => {  
      return el.europesales;
    });
    let initialValue = 0;
    let totalEuSales = eUSales.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      return (totalEuSales = Math.round(totalEuSales/6));
  }

  function getRemainingSales(){
    let remainingSales = videoGames.map((el) => {  
      return el.othersales;
    });
    let initialValue = 0;
    let totalRemainingSales = remainingSales.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      return (totalRemainingSales = Math.round(totalRemainingSales));
  }


  function generateCustomChartData(){
  
    let regionsArray = ["Japan", "United States", "Canada", "Mexico", "France", "Germany", "Italy", "Spain", "Ukraine", "Poland", "Remaining Countries"];

    let salesArray = [getJapanSales(), getNorthAmSales(), getNorthAmSales(), getNorthAmSales(), getEuSales(), getEuSales(), getEuSales(), getEuSales(), getEuSales(), getEuSales(), getRemainingSales()];
    
    // let finalArray = regionsArray.map(function(el, i) {
    //   return el.salesArray[i];
      // return [el, i];
    // });

    // let regionsArray1 = []; 
    // debugger; 
    // regionsArray1 = regionsArray.flat[1]; 
    // regionsArray1.split(',');
    // let salesArray1 = [];
    // salesArray1 = salesArray.flat[1];
    // salesArray1.split(',');
    let finalArray = [];

    for (let i = 0; i < salesArray.length; i++) {
      // finalArray += [regionsArray[i], salesArray[i]]
      finalArray.push([regionsArray[i], salesArray[i]])
    }
    // for (let i = 0; i < salesArray.length; ++i) {
    //   //map regionsArray at i to salesArray at i
    //   for (let j = 0; j< regionsArray.length; j++){
    //     regionsArray1 += regionsArray[j];
    //   }
    //   finalArray += [regionsArray1[i], salesArray[i]];
    // }
    //  let flattenedArray = [...finalArray].flat[Infinity];

    const data = [["Country", "Sales"], ...finalArray];
    console.log("Data", data);
    return data;
  }
  

  return (
    <div className = 'region-chart'>
      <h1 style = {{'margin':'1rem'}}  className = 'font-link title'>Total Sales by Region*
        <small className = 'text-muted font-link'> In Millions</small>
        </h1>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              // const region = data[selection[0].row + 1];
              const region = generateCustomChartData()[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={generateCustomChartData()}
        options={options}
      
      />  
      <h5 className = 'font-link data-set-note'>*Dataset accounts for: North America, Europe, Japan, and Remaining Countries.</h5>
    </div>
  );
}

//     "id": 1,
//     "game_rank": 11,
//     "name": "Nintendogs",
//     "platform": "DS",
//     "year": 2005,
//       "genre": "Simulation",
//     "publisher": "Nintendo",
//     "northamericasales": 9.07,
//     "europesales": 11.0,
//     "japansales": 1.93,
//     "othersales": 2.75,
//     "globalsales": 24.76
// }