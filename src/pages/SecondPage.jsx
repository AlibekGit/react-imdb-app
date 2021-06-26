import React, { useEffect, useState } from 'react';
import {
  useParams,
  useHistory,
} from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import omdbAxios from '../axiosConfig';

function SecondPage() {
  const { imdbId } = useParams();
  const history = useHistory();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function searchFullFilmDescription() {
      try {
        const res = await omdbAxios.get('', {
          params: {
            plot: 'full',
            i: imdbId,
          },
        });
        setMovie(res.data);
      } catch (e) {
        await Promise.reject(e);
      }
    }

    searchFullFilmDescription();
  }, []);
  return (
    <section>
      <Container>
        <Button variant="contained" onClick={() => history.push('/')}>Назад</Button>
        <h2>{movie.Title}</h2>
      </Container>
    </section>
  );
}

export default SecondPage;
