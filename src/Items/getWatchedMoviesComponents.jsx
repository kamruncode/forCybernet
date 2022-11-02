import React from 'react'
import { removeWatchedMovie } from "../features";
export function getWatchedMoviesComponents(movies) {
  

    movies.map((movie) => {
       (
          <div className="watched">
            <div>
              <img src={movie.image} height="100px" />
            </div>
            <span>
              <Navlink
                className="movie-watched"
                to="#"
                onClick={function () {
                  removeWatchedMovie(movie.title);
                }}
              >
                {movie.title}
              </Navlink>
            </span>
            <br />
            <span>{movie.comment}</span>
            <br />
            <br />
          </div>
        )
  
    }
