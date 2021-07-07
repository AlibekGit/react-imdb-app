import { SEARCH_FILMS, SET_COUNT } from './constants';

const defaultState = {
  films: [],
  counter: 10,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, counter: state.counter + action.payload };
    case SEARCH_FILMS:
      return { ...state, films: action.payload };
    default:
      return state;
  }
}
