import omdbAxios from '../axiosConfig';
import { SEARCH_FILMS } from './constants';

export const setFilms = (films) => ({ type: SEARCH_FILMS, payload: films });

export function searchFilms(filmTitle) {
  return async (dispatch) => {
    const res = await omdbAxios.get('', {
      params: {
        s: filmTitle,
      },
    });
    dispatch(setFilms(res.data.Search));
  };
}
