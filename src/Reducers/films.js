import {ADD_FILM, ADD_FILMS, REMOVE_ACTIVE_FILM} from "../Constants/filmsConstants";

const DEFAULT_STATE = {filmsList: [], activeFilm: null};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {

    case ADD_FILMS: {
      return {...state, filmsList: action.films}
    }

    case ADD_FILM: {
      return {...state, activeFilm: action.film}
    }

    case REMOVE_ACTIVE_FILM: {
      return {...state, activeFilm: null}
    }

    default:
      return state
  }
}