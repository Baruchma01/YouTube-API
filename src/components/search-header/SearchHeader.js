import React from "react";
import classes from "./SearchHeader.css";

export default function SearchHeader(props) {
  return (
    <div className={classes.SearchInput}>
      <div className={classes.Setting}>
        <i className={classes.UserIcon}>
         <p>B</p>
        </i>
      </div>
      <div className={classes.InputContainer}>
        <button onClick={props.onClick}>
          <i className="fas fa-search" style={{ color: "gray" }}></i>
        </button>
        <input
          className={classes.Input}
          placeholder="חיפוש..."
          onChange={props.onChange}
        />
      </div>
      <div className={classes.Img}>
        <img alt="logo" src={require("./youtube-logo.jpg")} width="100px" />
      </div>
    </div>
  );
}
