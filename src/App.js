import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import { Container } from 'semantic-ui-react';

import ToDoList from './components/ToDoList';
import NavMenu from './components/NavMenu';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu/>
        <Container textAlign='center'>
          <ToDoList/>
        </Container>
        {/* <LandingPage /> */}
      </div>
    );
  }
}

export default App;
