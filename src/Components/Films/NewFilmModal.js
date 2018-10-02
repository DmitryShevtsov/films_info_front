import {connect} from 'react-redux';
import Modal from 'react-modal';
import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import {openNewFilmModal, closeNewFilmModal} from "../../Actions/modalsActions";
import {createFilm} from "../../Actions/filmsActions";

class newFilmModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      format: '',
      release: '',
      stars: '',
      image: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  open = () => {
    this.props.openNewFilmModal()
  };
  close = () => {
    this.props.closeNewFilmModal()
  };
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();

    let film = {
      title: this.state.title,
      format: this.state.format,
      release: this.state.release,
      stars: this.state.stars,
      image: this.state.image
    };
    this.props.createFilm(film)
  }

  render() {
    return <button href="javascript:void(0)" onClick={this.open}>
      Add new film
      <Modal isOpen={this.props.isNewFilmModalOpen}
             contentLabel="Modal">
        <form onSubmit={this.handleSubmit}>
          <label>Name of film:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          </label>
          <label>Release year:
            <input type="text" name="release" value={this.state.release} onChange={this.handleChange}/>
          </label>
          <label>Stars:
            <input type="text" name="stars" value={this.state.stars} onChange={this.handleChange}/>
          </label>
          <label>
            Format:
            <input type="text" name="format" value={this.state.format} onChange={this.handleChange}/>
          </label>
          <label>Image URL:
            <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
          </label>
          <button type="submit" className="button"><span>Submit</span></button>
        </form>

        <button onClick={this.close} className="button-close"><span>Close</span></button>
      </Modal>
    </button>
  }


}

function stateProps(state) {
  return {
    isNewFilmModalOpen: state.filmModals.isNewFilmModalOpen
  }
}

function dispatchToProps(dispatch) {
  return {
    openNewFilmModal: () => {
      dispatch(openNewFilmModal())
    },
    closeNewFilmModal: () => {
      dispatch(closeNewFilmModal())
    },
    createFilm: (film) => {
      dispatch(createFilm(film))
    }
  }
}

export default connect (stateProps, dispatchToProps) (newFilmModal)