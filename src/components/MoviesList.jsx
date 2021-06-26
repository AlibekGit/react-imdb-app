import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';

function MoviesList({ movies }) {
  return (
    <Grid container direction="row" spacing={8}>
      {movies.map((mov) => (
        <Grid container item xs={3} key={mov.imdbID.toLocaleString()}>
          <Paper>
            <div className="moviesList__item">
              <img src={mov.Poster} alt="movie" />
              <Link to={{
                pathname: `/${mov.imdbID}`,
                state: { mov },
              }}
              />
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string,
    Poster: PropTypes.string,
    imdbID: PropTypes.string,
  })),
};

MoviesList.defaultProps = {
  movies: [],
};

export default MoviesList;
