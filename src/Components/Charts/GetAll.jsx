import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';
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

   export default function GetAll({videoGames}) {
    

    function generateDataFormChart(){
    
    //filter by year after 2013

        let filteredGames = videoGames.filter(el => el.year >= 2013);
        console.log('filtered games:', filteredGames);

        
    //get platforms using a map function

        let platforms = filteredGames.map(el =>{
            return el.platform;
        });
        console.log(platforms);


    //remove duplicates using set constructor and spread syntax (ex: [...new Set(array)]);
        
        let distinctplatforms = [...new Set(platforms)];
        
        console.log('distinct platforms:', distinctplatforms);

        let globalSalesSum = distinctplatforms.map((game) => {
            let sum = 0;
            return (sum += game.globalsales)});


        let platformArrays = distinctplatforms.map(platform => {
            debugger;
                // allGamesForplatform = array of total amount of devices of each platform
            let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);
                console.log('all games', allGamesForPlatform);
                for (let i = 0; i < allGamesForPlatform.length; i++){
                    let sum = 0;
                    sum += i.globalsales
                    console.log('Sum', sum)
                    return sum;
                    
                }          
            
            
            
           // now we need to loop through allGamesForPlatform and sum each games global sales

           //once we have the sum of all of those games global sales replace 10
                
           return [platform, globalSalesSum, "green"];

            });
                
            
            
            
            
            
        

        // console.log(platformArrays);





    // get total global sales of each platform: hint: allGamesForPlatform = filteredGames.filter(game => game.platform== platform);





    //then loop through allGamesForlatform and add up each game's global sales





    //then put that value in place of the int in the return.



       
        // console.log(`gamesFilteredByYear: ${gamesFilteredByYear}`);

        // let response1 = props.setGlobalSalesSince2013(gamesFilteredByYear);
        // console.log(`response1: ${gamesFilteredByYear}`);

            const data = [
                ["Platform", "Sales", { role: "style" }],
                ...platformArrays, 
                

            ];
            console.log('Data', data);

            return data;
           
        }

      

        // ["PS3", 8.94, "gold"], // RGB value
        // ["Silver", 10.49, "silver"], // English color name
        // ["Gold", 19.3, "gold"],
        // ["Platinum", 21.45, "blue"], // CSS-style declaration 



    return ( 
        <div>
            <h1>Global sales chart</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
        </div>
     );
}
 

   

