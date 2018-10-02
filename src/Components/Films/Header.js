import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-grid-system';
import {addFilms, fetchFilms} from "../../Actions/filmsActions";

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSearch = () => {
    let films = [];
    if (this.state.search != '') {
      this.props.films.filmsList.map((film) => {
        if (film.stars.split(', ').includes(this.state.search)) {
          films.push(film)
        }
        else {
          if (film.title == this.state.search) {
            films.push(film)
          }
        }
      });
      this.props.addFilms(films);
    }
    else {
      this.props.fetchFilms();
    }

  };

  render() {
    return <div>
      <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/>
      <button onClick={this.handleSearch}>Search</button>
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
    addFilms: (films) => {
      dispatch(addFilms(films))
    },
    fetchFilms: () => {
      dispatch(fetchFilms())
    }
  }
}

export default connect(stateProps, dispatchToProps)(Header);
