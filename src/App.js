import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import components
import DisplayChart from "./Components/DisplayChart/DisplayChart";
import Search from "./Components/Search/Search";



function App() {
  
//constant for all videos retrieved
const [videoGames, setVideoGames] = useState([]);



useEffect(() => {
  getvideoGames();
}, []);

async function getvideoGames(){
  try{
    const response = await axios.get('http://localhost:8080/getall');
    setVideoGames(response.data);
  } catch(ex){
    console.log(`Error in getVideoGames EXCEPTION: ${ex}`)
  }
}




  return (
    <div>
      <Search/>
      <DisplayChart videoGames={videoGames} />
    </div>
  );
}

export default App;
