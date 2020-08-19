import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VideoItem from "../../components/video-item/VideoItem";
import classes from "./ItemPage.css";
import axios from "axios";
import Spinner from '../../components/layout/Spinner/Spinner';

const ItemPage = (props) => {
  const thumbnails = props.location.state.snippet.thumbnails.default.url;
  const songName = props.location.state.snippet.title;
  useEffect(() => {
    getRelatedPlayList();
  }, []);

  const getRelatedPlayList = async () => {
    setLoading(true);
    const relatedPlayList = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.location.state.id.videoId}&type=video&key=AIzaSyDOP7dDemmDXkdQXVt0dfp4XUovd2wNGFY`
    );
    if (relatedPlayList) {
      setLoading(false);
      setRelatedPlayList(relatedPlayList.data.items);
    }
  };

  const [relatedPlaylists, setRelatedPlayList] = useState([]);
  const [loading, setLoading] = useState(true);
  const youtubeUrl = "https://www.youtube.com/embed/";
  const songUrl = typeof props.location.state.id === "string"? youtubeUrl + props.location.state.id : youtubeUrl + props.location.state.id.videoId;
  return (
    <div>
      {loading? <Spinner /> : <div className={classes.PlayerContainer}>
      <div className={classes.divCol}>
        <ReactPlayer light={thumbnails} url={songUrl} />
        {<p className={classes.SongName}>{songName}</p>}
      </div>
      <div className={classes.divCol}>
        {(relatedPlaylists || []).map((item) => {
          return <VideoItem key={item.id.videoId} item={item} />;
        })}
      </div>
    </div>}
    </div>

  );
};

export default ItemPage;
