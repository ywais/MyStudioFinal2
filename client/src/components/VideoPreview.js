import React, { useEffect, useState } from 'react';
import axios from 'axios';

// secret api key ↓↓
const apiKey = 'AIzaSyCT2X4ak356lSMmFG93z6IdF_HfTPiMq5s';

function VideoPreview(props) {
  const [title, setTitle] = useState  ('');

  const getVideoTitle = async () => {
    const { data: songData } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${props.videoID}&key=${apiKey}`
    );
    const videoTitle = songData.items[0].snippet.title;
    setTitle(videoTitle);
  }

  useEffect(() => {
    getVideoTitle();
  }, []);
  
  return (
    <div className='videoContainer'>
      <div className='videoPreview'>
        <iframe
          title={title}
          width='100%' height='100%'
          src={`https://www.youtube.com/embed/${props.videoID}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen>
        </iframe>
      </div>
      <h4>{title}</h4>
      <h6>{props.index}/{props.total}</h6>
    </div>
  );
}

export default VideoPreview;