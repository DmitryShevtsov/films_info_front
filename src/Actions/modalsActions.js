import {
  CLOSE_DELETE_FILM_MODAL,
  CLOSE_NEW_FILM_FROM_FILE_MODAL,
  CLOSE_NEW_FILM_MODAL, OPEN_DELETE_FILM_MODAL,
  OPEN_NEW_FILM_FROM_FILE_MODAL,
  OPEN_NEW_FILM_MODAL
} from "../Constants/modalsConstants";

export function openNewFilmModal() {
  return {
    type: OPEN_NEW_FILM_MODAL
  }
}

export function closeNewFilmModal() {
  return {
    type: CLOSE_NEW_FILM_MODAL
  }
}

export function openNewFilmFromFileModal() {
  return {
    type: OPEN_NEW_FILM_FROM_FILE_MODAL
  }
}

export function closeNewFilmFromFileModal() {
  return {
    type: CLOSE_NEW_FILM_FROM_FILE_MODAL
  }
}

export function openDeleteFilmModal() {
  return {
    type: OPEN_DELETE_FILM_MODAL
  }
}

export function closeDeleteFilmModal() {
  return {
    type: CLOSE_DELETE_FILM_MODAL
  }
}



