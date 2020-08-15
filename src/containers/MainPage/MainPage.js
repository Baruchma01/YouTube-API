import React, { useState, useEffect } from "react";
import SearchInput from "../../components/search-input/SearchInput";
import SearchResult from "../../components/search-results/SearchResults";
import { search } from "../../api/apiActions";
import { withRouter } from "react-router-dom";
import axios from "axios";

function MainPage(props) {
  const baseUrl = "https://www.googleapis.com/youtube/v3/search";
  const params = {
    part: "snippet",
    maxResults: 100,
    q: "rap",
    type: "video",
    key: "AIzaSyDOP7dDemmDXkdQXVt0dfp4XUovd2wNGFY",
  };

  useEffect(() => {
    axios.get(baseUrl, { params }).then((video) => {
      setVideosList(video.data.items);
      setSearchVideosList(video.data.items);
    });
  }, []);

  const [videosList, setVideosList] = useState([]);

  const [searchVideosList, setSearchVideosList] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (event) => {
    if (event.target.value === "") {
      setSearchVideosList(videosList);
    } else {
      setSearchValue(event.target.value);
    }
  };

  const handleOnClick = () => {
    const videosResults = search(videosList, searchValue);
    setSearchVideosList(videosResults);
  };

  console.log(props.location.pathname);

  const page =
    props.location.pathname === "/" ? (
      <>
        <SearchInput onChange={handleOnChange} onClick={handleOnClick} />
        <SearchResult videosList={searchVideosList} />
      </>
    ) : (
      <>
        <SearchInput onChange={handleOnChange} onClick={handleOnClick} />{" "}
      </>
    );

  return <div>{page}</div>;
}

export default withRouter(MainPage);
