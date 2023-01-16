import React, { useState, useEffect } from "react";
import CustomChart from "../Charts/CustomChart";
import GetAll from "../Charts/GetAll";
import SearchedChart from "../Charts/SearchedChart";

export default function DisplayChart({
  videoGames,
  getvideoGames,
  searched,
  setSearched,
  customChart,
  setCustomChart,
  setSearchedGames,
  searchedGames,
  setFeaturedVideo,
  
}) {
  return (
    <div>
      {!searched ? (
        <div>
          <GetAll videoGames={videoGames} />
          <CustomChart videoGames={videoGames} />
        </div>
      ) : (
        <SearchedChart
          videoGames={videoGames}
          searched={searched}
          setSearched={setSearched}
          setSearchedGames={setSearchedGames}
          searchedGames={searchedGames}
          setFeaturedVideo = {setFeaturedVideo}
        />
      )}
    </div>
  );
}
