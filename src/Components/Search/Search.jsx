import React from 'react';

//! TO DO : delete serch query after searched so that they can search again from all

export default function Search({
  chart,
  setChart,
  criteria,
  setCriteria,
  videoGames,
  setVideoGames,
  getvideoGames,
  videoGamesId,
  setVideoGamesId,
  searched,
  setSearched
}) {

  //find all then filter by search term to get id to search by id.

  // async function getById() {
  //   let response = await axios.get(
  //     `http://localhost:8080/getById/${videoGamesId}`
  //   );
  //   setChart(response.data);
  // }

  function searchGames() {
    if (criteria.length > 0) {
      // criteria = criteria.toLowerCase();
      let outcomes = videoGames.filter((el) => {
        if (el.name.includes(criteria)) {
          // || el.game_rank.includes(criteria) || el.platform.includes(criteria) || el.year.includes(criteria) || el.genre.includes(criteria)|| el.publisher.includes(criteria) || el.northamericasales.includes(criteria) || el.europesales.includes(criteria) || el.japansales.includes(criteria)|| el.othersales.includes(criteria) || el.globalsales.includes(criteria))

          return true;
        } else {
          return false;
        }
      });
      setVideoGames(outcomes);
    }
  }

  //sends search term up to app.js
  function handleSubmit(event) {
    event.preventDefault();
    // getvideoGames();
    setCriteria("");
    searchGames();
    setSearched(true);
    
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search">
        <input
          className="search-input"
          type="text"
          onChange={(event) => setCriteria(event.target.value)}
          value={criteria}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
