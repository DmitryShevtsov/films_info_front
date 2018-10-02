import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-grid-system';
import {fetchSingleFilm, removeActiveFilm, deleteFilm} from "../../Actions/filmsActions";
import DeleteFilmModal from './DeleteFilmModal';
import '/home/dmitry/WebstormProjects/films_info/src/Styles/Film.css';

class Film extends Component {
  componentDidMount() {
    this.props.getFilm(this.props.id);
  }

  componentWillUnmount() {
    this.props.removeActiveFilm()
  }

  render() {

    if (this.props.film) {
      return <div className="film">
        <Col sm={4} md={4} lg={4}>
          <div className="logoOuter">
            <img className="singleFilmlogo"
                 src={this.props.film.image}/>
          </div>
          <DeleteFilmModal/>
        </Col>

        <Col sm={8} md={8} lg={8}>
          <div className="description">
            <Row><h1>{this.props.film.title}</h1></Row>
            <Row>Release year: {this.props.film.release}</Row>
            <Row>Actors: {this.props.film.stars}</Row>
            <Row>Format: {this.props.film.format}</Row>
          </div>
        </Col>
      </div>
    }

    else return <div><h1>Film doesn't exist</h1></div>
  }
}


function stateProps(state, ownProps) {
  return {
    film: state.films.activeFilm,
    id: ownProps.match.params.id

  };
}

function dispatchToProps(dispatch) {
  return {
    getFilm: (id) => {
      dispatch(fetchSingleFilm(id))
    },
    removeActiveFilm: () => {
      dispatch(removeActiveFilm())
    },
    deleteFilm: (id) => {
      dispatch(deleteFilm(id))
    }
  };
}

export default connect(stateProps, dispatchToProps)(Film);
