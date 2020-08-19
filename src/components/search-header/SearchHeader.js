import React from "react";
import classes from "./SearchHeader.css";

export default function SearchHeader(props) {
  return (
    <div className={classes.Header}>
      <div className={classes.Setting}>
        <div>
          {/* <i className={classes.UserIcon}>
            <p>B</p>
          </i> */}
          <img alt="user" src={require('./user.png')} height="39" width="39"/>
        </div>
        <div>
          <i className="fas fa-bell fa-lg"></i>
        </div>
        <div>
          <i className="fas fa-border-none fa-lg"></i>
        </div>
        <div>
          <i className="fas fa-video"></i>
        </div>
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
        <i class="fas fa-bars"></i>
      </div>
    </div>
  );
}
