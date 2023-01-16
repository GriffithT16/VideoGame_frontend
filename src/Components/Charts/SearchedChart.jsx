import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




export default function SearchedChart({ searchedGames, setFeaturedVideo}) {
  const navigate = useNavigate();

  const handleClick= (game) => {
    navigate("/stats");
    // navigate("/stats", {state: game});
    // getVideoBySearchTerm(game.name)
  };



//retrieves a video by criteria/search term.
async function getVideoBySearchTerm(searchTerm) {
  try{
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`);
    if (response.status === 400){
      alert('The term you searched for does not exist. Please try another search.');
    }
    
    else{
      setFeaturedVideo(response.data.items);
      console.log('response.data.items', response.data.items)
    }
  }
  catch (error) {
      alert('Youtube API queries exhausted. Try again tomorrow.');
    }
  }
  


  return (
    <div>
      <h1 className="font-link title">Search Results</h1>
      <div className="searched-chart">
        <table className="table table-striped">
          <thead>
            <tr>              
              <th className="font-link">Name</th>
              <th className="font-link">Platform</th>
              <th className="font-link">Year</th>
              <th className="font-link">Genre</th>
              <th className="font-link">Publisher</th>
              <th className="font-link">Rank</th>
            </tr>
          </thead>
          <tbody>
            {searchedGames.map((el, index) => {
              return (
                <tr key={el.id}>
                  {/* {index + 1} */}
                  <td>{el.name}</td>
                  <td>{el.platform}</td>
                  <td>{el.year}</td>
                  <td>{el.genre}</td>
                  <td>{el.publisher}</td>
                  <td>{el.game_rank}</td>
                  <button className = 'button-51' onClick={() => handleClick(el)}>Stats</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
