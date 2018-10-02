import {connect} from 'react-redux';
import Modal from 'react-modal';
import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import {openNewFilmFromFileModal, closeNewFilmFromFileModal, closeNewFilmModal} from "../../Actions/modalsActions";
import {createFilmFromFile} from "../../Actions/filmsActions";

class NewFilmFromFileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    }
    ;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  open = () => {
    this.props.openNewFilmFromFileModal();
  };

  close = () => {
    this.props.closeNewFilmFromFileModal()
  };
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createFilmFromFile(document.getElementById("fileInput").files[0]);
  };

  render() {
    return <a href="javascript:void(0)" onClick={this.open}>
      Add new film from file
      <Modal isOpen={this.props.isNewFilmFromFileModalOpen}
             contentLabel="Modal">
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose file to input
            <input type="file" name="file" id="fileInput" onChange={this.handleChange}/>
          </label>
          <button type="submit">Add films</button>
        </form>
        <button onClick={this.close} className="button-close"><span>Close</span></button>
      </Modal>
    </a>
  }


}

function stateProps(state) {
  return {
    isNewFilmFromFileModalOpen: state.filmModals.isNewFilmFromFileModalOpen
  }
}

function dispatchToProps(dispatch) {
  return {
    openNewFilmFromFileModal: () => {
      dispatch(openNewFilmFromFileModal())
    },
    closeNewFilmFromFileModal: () => {
      dispatch(closeNewFilmFromFileModal())
    },
    createFilmFromFile: (file) => {
      dispatch(createFilmFromFile(file))
    }
  }
}

export default connect(stateProps, dispatchToProps)(NewFilmFromFileModal)