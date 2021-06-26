import React from 'react';
import PropTypes from 'prop-types';

export default function RatingList({ ratings }) {
  return (
    <div className="movie-page__score">
      {ratings?.map((rating) => (
        <div className="movie-page__score-item" key={rating.Source}>
          <span>{rating.Source}</span>
          <span>{rating.Value}</span>
        </div>
      ))}
    </div>
  );
}

RatingList.propTypes = {
  ratings: PropTypes.shape([
    {
      Source: PropTypes.string,
      Value: PropTypes.string,
    },
  ]).isRequired,
};
