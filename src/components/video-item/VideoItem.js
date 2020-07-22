import React from 'react';
import ReactPlayer from 'react-player';
import {
  useHistory
} from "react-router-dom";
import classes from './VideoItem.css';


export default function VideoItem(props) {
  const thumbnails = props.item.snippet.thumbnails.default.url;
  const youtubeUrl = 'https://www.youtube.com/embed/';
  let history = new useHistory();

  return (
    <div className={classes.ItemPage} onClick={()=> history.push('/item-page', props.item)}>
      <ReactPlayer
        light= {thumbnails}
        url={`${youtubeUrl}${props.item.id}`}
        width={272}
        height={153}
      />
      <p>{props.item.snippet.title}</p>
    </div>
  )
}