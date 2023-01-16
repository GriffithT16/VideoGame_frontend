import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function SearchedChart({ searchedGames, setFeaturedVideo}) {
  const navigate = useNavigate();

  const handleClick= (game) => {
    // navigate("/stats");
    navigate("/stats", {state: game});
    // getVideoBySearchTerm(game.name)
  };



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
