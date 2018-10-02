import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-grid-system';
import {fetchFilms} from "../../Actions/filmsActions";
import {FilmsListElement} from "./FilmsListElement";
import NewFilmModal from './NewFilmModal'
import NewFilmFromFileModal from './NewFilmFromFileModal';
import '/home/dmitry/WebstormProjects/films_info/src/Styles/FilmsList.css'

class FilmsList extends Component {

  getAllFilmsElements() {
    return this.props.films.filmsList.map((film) => {
      let link = `/films/${film.id}`;
      return <Link key={film.id} to={link}>
        <Row>
          <FilmsListElement key={film.id} title={film.title} release={film.release} stars={film.stars} format={film.format} image={film.image}/>
        </Row>
      </Link>
    })
  }

  render() {
    return <div className="filmsList">
      <Row>
        <Col sm={12} md={8} lg={8}>
          {this.getAllFilmsElements()}
        </Col>
        <Col sm={0} md={4} lg={4}>
          <NewFilmModal/>
          <NewFilmFromFileModal/>
        </Col>
      </Row>
    </div>
  }
}

function stateProps(state) {
  return {
    films: state.films
  }
}

function dispatchToProps(dispatch) {
  return {
    getFilms: dispatch(fetchFilms())
  }
}

export default connect(stateProps, dispatchToProps)(FilmsList);