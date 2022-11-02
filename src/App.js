import React from "react";
import { Navlink } from "@react-router-dom";
import "./App.css";
import { addWatchedMovie } from "./features";
import { getWatchedMoviesComponents } from "./Items/getWatchedMoviesComponents";
import { add, getWatchedMovies, getAllMovies } from "./features";

function App(props) {
  return (
    <div className="App">
      <h1>Reactive Movies!</h1>
      <h1>Add movie!</h1>
      <b>
        TITLE:
        <br />
        <input
          type="text"
          onChange={(e) => {
            title = e.target.value;
          }}
        />
      </b>
      <br />
      <b>
        IMAGE URL:
        <br />
        <input
          type="text"
          onChange={(e) => {
            image = e.target.value;
          }}
        />
      </b>
      <br />
      <b>
        COMMENT:
        <br />
        <input
          type="text"
          onChange={(e) => {
            comment = e.target.value;
          }}
        />
      </b>
      <br />
      <input
        type="button"
        onClick={(e) => {
          add(title, image, comment);
        }}
        value="ADD MOVIE"
      />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

let title = "";
let image = "";
let comment = "";

export default App;
