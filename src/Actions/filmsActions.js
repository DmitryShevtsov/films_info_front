import {ADD_FILM, ADD_FILMS, REMOVE_ACTIVE_FILM} from "../Constants/filmsConstants";
import {closeNewFilmModal}  from './modalsActions';



export function addFilms(films) {
  return {
    type: ADD_FILMS,
    films
  }
}

export function addFilm(film) {
  return {
    type: ADD_FILM,
    film
  }
}

export function removeActiveFilm() {
  return {
    type: REMOVE_ACTIVE_FILM
  }
}

export function fetchFilms() {
  return (dispatch) => {
    return fetch(`http://localhost:3003/films`).then((response) => {
      return response.json();
    }).then((films) => {
      dispatch(addFilms(films));
    });
  }
}

export function fetchSingleFilm(id) {
  return (dispatch) => {
    return fetch(`http://localhost:3003/films/${id}`).then((response) => {
      return response.json();
    }).then((film) => {
      dispatch(addFilm(film));
    });
  }
}

export function deleteFilm(id) {
  return (dispatch) => {
    return fetch(`http://localhost:3003/films/${id}`, {method: 'DELETE'}).then((res) => {
      dispatch(removeActiveFilm());
    })
  }
}

export function createFilm(film) {
  return (dispatch) => {
    return fetch(`http://localhost:3003/films`, {
      method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
        title: film.title,
        release: film.release,
        format: film.format,
        stars: film.stars,
        image: film.image
      })
    }).then((response) => {
      if (response.status === 200) {
        dispatch(fetchSingleFilm(response.id));
        dispatch(closeNewFilmModal());
      }
      else {
        response.json().then((res) => {
          return res;
        });
      }

    })
  }
}

export function createFilmFromFile(file) {
  console.log(file);
  let fd = new FormData();
  fd.append('file', file);
  console.log(fd.get('file'));
    return (dispatch) => {
      return fetch(`http://localhost:3003/bulk_films`, {
        method: 'POST', body: fd})
        .then((response) => {
        response.json().then((res) => {
          return res;
        })
      })
    }
}