import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetAll from '../Charts/GetAll';

//!logic here for what chart to display.

export default function DisplayChart({videoGames}) {



  return (
    <div>   
        <GetAll videoGames = {videoGames}/>
    </div>
  )
}
