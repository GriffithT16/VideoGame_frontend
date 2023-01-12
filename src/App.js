import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

//import components
import DisplayChart from "./Components/DisplayChart/DisplayChart";
import Search from "./Components/Search/Search";

function App() {
  //constant for all videos retrieved
  const [videoGames, setVideoGames] = useState([]);
  const [chart, setChart] = useState();
  const [criteria, setCriteria] = useState("");
  const [videoGamesId, setVideoGamesId] = useState(1);
  const [searched, setSearched] = useState(false);
  const [customChart, setCustomChart] = useState(false);
  

  useEffect(() => {
    getvideoGames();
  }, []);

  async function getvideoGames() {
    try {
      const response = await axios.get(`http://localhost:8080/getall`);
      setVideoGames(response.data);
    } catch (ex) {
      console.log(`Error in getVideoGames EXCEPTION: ${ex}`);
    }
  }

  return (
    <div>
      <Search style={{margin: "10em", padding:"10em"}}
        criteria={criteria}
        setCriteria={setCriteria}
        videoGames={videoGames}
        setVideoGames={setVideoGames}
        chart={chart}
        setChart={setChart}
        getvideoGames={getvideoGames}
        videoGamesId={videoGamesId}
        setVideoGamesId={setVideoGamesId}
        searched={searched}
        setSearched={setSearched}
      />

      <DisplayChart
        videoGames={videoGames}
        getvideoGames={getvideoGames}
        searched={searched}
        setSearched={setSearched}
        customChart={customChart}
        setCustomChart={setCustomChart}
      />
    </div>
  );
}

export default App;
