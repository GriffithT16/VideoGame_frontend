import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function VideoPlayer({ featuredVideo }) {
  const { state } = useLocation();
  const [video, setVideo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //retrieves a video by criteria/search term.
  async function getVideoBySearchTerm(searchTerm) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}&part=snippet`
      );
      if (response.status === 400) {
        alert(
          "The term you searched for does not exist. Please try another search."
        );
      } else {
        setVideo(response.data.items[0]?.id.videoId);
        setTitle(response.data.items[0].snippet?.title);
        setDescription(response.data.items[0].snippet?.description);
        
      }
    } catch (error) {
      console.log("video:", error);
    }
  }

  useEffect(() => {
    getVideoBySearchTerm(state.name);
  }, []);

  return (
    <div>
      <div className="video-info font-link">
        <h2>{title}</h2>
        <iframe
          className="video"
          id="ytplayer"
          type="text/html"
          width="854"
          height="480"
          // src={`https://www.youtube.com/embed/na_izM5zdY8?autoplay=1&mute=1&origin=http://example.com`}
          src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
        <p className="font-link">{description}</p>
      </div>
    </div>
  );
}
