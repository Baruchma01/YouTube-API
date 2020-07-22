import React from "react";
import VideoItem from "../video-item/VideoItem";
import classes from "./SearchResults.css";

export default function SearchResults(props) {
  return (
    <div className={classes.SearchResults}>
      <h5 className={classes.Title}>מומלצים</h5>
      {(props.videosList || []).map((item) => {
        return (
          <div className={classes.VideoItem} key={item.snippet.title}>
            <VideoItem key={item.id} item={item} />{" "}
          </div>
        );
      })}
    </div>
  );
}
