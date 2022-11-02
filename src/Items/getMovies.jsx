import { Navlink } from "@react-router-dom";
import { useDispatch } from "react-redux";
const getMoviesComponents = (movies) => {
  let components = [];
  const dispatch = useDispatch();
  movies.map((movie) => {
    components.push(
      <div className="all">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <Navlink
            className="movie-watched"
            to="#"
            onClick={() => {
              dispatch(AddMovie(movie));
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
    );
  });
};
