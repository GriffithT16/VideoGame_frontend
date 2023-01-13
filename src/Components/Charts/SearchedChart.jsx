import React from 'react'


export default function SearchedChart({searchedGames}) {
  return (

    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Platform</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Publisher</th>
            <th>Game Rank</th>
          </tr>
        </thead>
        <tbody>
          {searchedGames.map((el, index) => {
            return (
              <tr key={index}>
                {index + 1}
                <td>{el.name}</td>
                <td>{el.platform}</td>
                <td>{el.year}</td>
                <td>{el.genre}</td>
                <td>{el.publisher}</td>
                <td>{el.game_rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
  )
}
