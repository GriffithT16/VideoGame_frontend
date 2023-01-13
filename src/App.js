import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import components
import DisplayChart from "./Components/DisplayChart/DisplayChart";
import Search from "./Components/Search/Search";
import NavBar from "./Components/NavBar/NavBar";
import CopiesByConsole from "./Components/Charts/CopiesByConsole";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  //constant for all videos retrieved
  const [videoGames, setVideoGames] = useState([]);
  const [chart, setChart] = useState();
  const [criteria, setCriteria] = useState("");
  const [videoGamesId, setVideoGamesId] = useState(1);
  const [searched, setSearched] = useState(false);
  const [customChart, setCustomChart] = useState(false);
  const [searchedGames, setSearchedGames] = useState([]);

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
      <NavBar searched={searched} setSearched={setSearched} />
      <Routes>
        <Route path="/" element={[ <Search
          style={{ margin: "10em", padding: "10em" }}
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
          searchedGames={searchedGames}
          setSearchedGames={setSearchedGames}
        />, <DisplayChart
        videoGames={videoGames}
        getvideoGames={getvideoGames}
        searched={searched}
        setSearched={setSearched}
        customChart={customChart}
        setCustomChart={setCustomChart}
        setSearchedGames={setSearchedGames}
        searchedGames={searchedGames}
      />]}/>
        



      
        <Route path="/stats" element={<CopiesByConsole
            videoGames={videoGames}
            searchedGames={searchedGames}
            setSearchedGames={setSearchedGames}
          />}/>
      </Routes>

    </div>
  );
}

export default App;
