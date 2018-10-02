import {
  CLOSE_DELETE_FILM_MODAL,
  CLOSE_NEW_FILM_FROM_FILE_MODAL,
  CLOSE_NEW_FILM_MODAL, OPEN_DELETE_FILM_MODAL,
  OPEN_NEW_FILM_FROM_FILE_MODAL,
  OPEN_NEW_FILM_MODAL
} from "../Constants/modalsConstants";

const DEFAULT_STATE = {
  isNewFilmModalOpen: false,
  isNewFilmFromFileOpen: false,
  isDeleteFilmModalOpen: false
};

export default function filmModals(state = DEFAULT_STATE, action) {
  switch (action.type) {

    case OPEN_NEW_FILM_MODAL: {
      return {...state,
      isNewFilmModalOpen: true}
    }
    case CLOSE_NEW_FILM_MODAL: {
      return {...state,
        isNewFilmModalOpen: false
      }
    }
    case OPEN_NEW_FILM_FROM_FILE_MODAL: {
      return {...state,
      isNewFilmFromFileModalOpen: true
      }
    }
    case CLOSE_NEW_FILM_FROM_FILE_MODAL: {
      return {...state,
      isNewFilmFromFileModalOpen: false}
    }
    case OPEN_DELETE_FILM_MODAL: {
      return {...state,
      isDeleteFilmModalOpen: true}
    }
    case CLOSE_DELETE_FILM_MODAL: {
      return {...state,
      isDeleteFilmModalOpen: false}
    }
    default:
      return state;
  }

}