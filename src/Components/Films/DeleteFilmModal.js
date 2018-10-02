import {connect} from 'react-redux';
import Modal from 'react-modal';
import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import {openDeleteFilmModal, closeDeleteFilmModal} from "../../Actions/modalsActions";
import {deleteFilm} from "../../Actions/filmsActions";

class DeleteFilmModal extends Component {
  open = () => {
    this.props.openDeleteFilmModal()
  };
  close = () => {
    this.props.closeDeleteFilmModal()
  };
  delete = () => {
    this.props.deleteFilm(this.props.activeFilmId)
    this.props.closeDeleteFilmModal()
  };

  render() {
    return <button href="javascript:void(0)" onClick={this.open}>
     Delete film
      <Modal isOpen={this.props.isDeleteFilmModalOpen}
             contentLabel="Modal">
        <label>Delete film</label>

        <button onClick={this.delete} className="button-close"><span>Delete</span></button>
        <button onClick={this.close} className="button-close"><span>Close</span></button>
      </Modal>
    </button>
  }


}

function stateProps(state) {
  return {
    isDeleteFilmModalOpen: state.filmModals.isDeleteFilmModalOpen,
    activeFilmId: state.films.activeFilm.id
  }
}

function dispatchToProps(dispatch) {
  return {
    openDeleteFilmModal: () => {
      dispatch(openDeleteFilmModal())
    },
    closeDeleteFilmModal: () => {
      dispatch(closeDeleteFilmModal())
    },
    deleteFilm: (id) => {
      dispatch(deleteFilm(id))
    }
  }
}

export default connect(stateProps, dispatchToProps)(DeleteFilmModal)