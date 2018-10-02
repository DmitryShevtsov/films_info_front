import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import '/home/dmitry/WebstormProjects/films_info/src/Styles/FilmsListElement.css';

export class FilmsListElement extends Component {
  render() {
    return <div className="filmListElement">

      <Col sm={4} md={4} lg={4}>
      <div className="logoOuter">
        <img className="logo"
             src={this.props.image}/>
      </div>
      </Col>

      <Col sm={8} md={8} lg={8}>
      <div className="description">
        <Row><h1>{this.props.title}</h1></Row>
        <Row>Release year: {this.props.release}</Row>
        <Row>Actors: {this.props.stars}</Row>
        <Row>Format: {this.props.format}</Row>
      </div>
      </Col>

    </div>
  }
}