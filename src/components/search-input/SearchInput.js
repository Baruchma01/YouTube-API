import React from "react";
import classes from "./SearchInput.css";

export default function SearchInput(props) {
  return (
    <div className={classes.SearchInput}>
      <div>
      <img alt="logo" src={require("./youtube-logo.jpg")} width="100px" />
      </div>
      <div>
      <button onClick={props.onClick}><i class="fas fa-search" style={{color: 'gray'}}></i></button>
      <input className={classes.Input} placeholder="חיפוש..." onChange={props.onChange} />
      </div>
    </div>
  );
}
