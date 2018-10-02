import React, { Component } from 'react';
import {Row, Col} from 'react-grid-system';
import {Link} from 'react-router-dom';
import Header from './Components/Films/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Link to={'/'}>MAIN</Link>
          <Header/>
          </header>

        <Col sm={1} md={1} lg={1}>

        </Col>
        <Col sm={11} md={11} lg={11}>
        {this.props.children}
        </Col>

      </div>
    );
  }
}

export default App;
