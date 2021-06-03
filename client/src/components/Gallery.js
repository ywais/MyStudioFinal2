import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoPreview from './VideoPreview';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// secret api key ↓↓
const apiKey = 'AIzaSyCT2X4ak356lSMmFG93z6IdF_HfTPiMq5s';

const CustomRightArrow = ({ onClick }) => (
  <button className="rightArrow" onClick={() => onClick()}>
    {/* {String.fromCharCode(62)} */}
    ❯
  </button>
);

const CustomLeftArrow = ({ onClick }) => (
  <button className="leftArrow" onClick={() => onClick()}>
    {/* {String.fromCharCode(60)} */}
    ❮
  </button>
);

function Gallery(props) {
  const [videosIDsArray, setVideosIDsArray] = useState([]);

  const getVideos = async () => {
    const ytUser = 'mdritmo'
    const { data: userData } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${ytUser}&key=${apiKey}`
    );
    const uploadsURL = userData.items[0].contentDetails.relatedPlaylists.uploads;
    const { data: uploadsData } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&id=${uploadsURL}&key=${apiKey}`
      );
    const uploadsCount = uploadsData.items[0].contentDetails.itemCount;
    const { data: videosData } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=UU6lAPXpU_uUguD1ZaWcmfBg&key=${apiKey}`
      );
    const moreVideos = uploadsCount > 50;
    const videosIDs = [];
    for(let i = 0; i < videosData.items.length; i++) {
      videosIDs[i] = videosData.items[i].contentDetails.videoId;
    }
    setVideosIDsArray(videosIDs);
  }

  useEffect(() => {
    getVideos();
  }, []);
  
  const addVideo = (videos) => videos && videos.map((video, index) => (
    <VideoPreview
      key={index}
      videoID={video}
      index={index + 1}
      total={videos.length}
    />
  ));

  return (
    <div className='galleryPage'>
      <h1>גלריית וידאו</h1>
      <Carousel
        arrows
        centerMode
        className="videoCarousel"
        containerClass="container"
        draggable
        infinite
        keyBoardControl={false}
        minimumTouchDrag={80}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={{
          // desktop: {
          //   breakpoint: { max: 4000, min: 1024 },
          //   items: 1,
          // },
          all: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
            // partialVisibilityGutter: 1400      ??????????????????????????
          },
        }}
      >
        {addVideo(videosIDsArray)}
      </Carousel>
    </div>
  );
}

export default Gallery;
