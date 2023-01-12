import React, { useState, useEffect } from 'react';
import GetAll from '../Charts/GetAll';
import SearchedChart from '../Charts/SearchedChart';


export default function DisplayChart({videoGames, getvideoGames, searched, setSearched}) {



  return (
    <div>   
        {!searched?(
        <GetAll videoGames = {videoGames}/>
        ):(
        <SearchedChart videoGames = {videoGames} searched = {searched} setSearched = {setSearched}/>
        )}
    </div>
  )
}
