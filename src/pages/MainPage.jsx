import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import omdbAxios from '../axiosConfig';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';

function MainPage() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieCount, setMovieCount] = useState('0');
  // Получаю массив из фильмов
  async function searchMovie(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await omdbAxios.get('', {
        params: {
          s: value,
        },
      });
      setMovies(response.data.Search);
      setMovieCount(response.data.totalResults);
      setLoading(false);
    } catch (error) {
      await Promise.reject(error);
    }
  }

  // Смена страницы через пагинацию
  async function changePage({ selected }) {
    setLoading(true);
    try {
      const response = await omdbAxios.get('', {
        params: {
          s: value,
          page: selected + 1,
        },
      });
      setMovies(response.data.Search);
      setMovieCount(response.data.totalResults);
      return setLoading(false);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Для пагинации считаю столько должно быть страниц
  const pagCount = Math.ceil(movieCount / 10);
  let showPagination;
  if (pagCount) {
    showPagination = <ReactPaginate containerClassName="pagination" pageCount={pagCount} onPageChange={changePage} pageRangeDisplayed={3} marginPagesDisplayed={3} />;
  }

  return (
    <Container maxWidth="lg">
      <h1>Поиск фильмов</h1>
      <SearchForm onFormSubmit={searchMovie} value={value} setValue={setValue} />
      {loading && <Loader />}
      <MoviesList movies={movies} />
      {showPagination}
    </Container>
  );
}

export default MainPage;
