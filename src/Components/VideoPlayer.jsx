
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom"


export default function VideoPlayer({featuredVideo}) {

    const{state} = useLocation();
    const [video, setVideo] = useState([]); 

//retrieves a video by criteria/search term.
async function getVideoBySearchTerm(searchTerm) {
  console.log(process.env.REACT_APP_API_KEY)
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`);
      if (response.status === 400){
        alert('The term you searched for does not exist. Please try another search.');
      }
      
      else{
        setVideo(response.data.items[0]?.id.videoId);
        console.log('video:', video)
      }
    }
    catch (error) {
        console.log('video:', error)
        
      }
    }
    
    
    useEffect(() => {
        getVideoBySearchTerm(state.name)},
    []);


    return (
    <div>
        <iframe
            className="video"
            id="ytplayer"
            type="text/html"
            width="854"
            height="480"
            // src={`https://www.youtube.com/embed/na_izM5zdY8?autoplay=1&mute=1&origin=http://example.com`}
            src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&origin=http://example.com`}
            frameborder="0">
        </iframe>
        {/* <div className = 'video-info'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div> */}
    </div>
  )
}