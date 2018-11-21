import React from "react";
// import ReactDOM from 'react-dom';
import { Menu, Button, Header } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import ToDoList from "./ToDoList";

class NavMenu extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item header>
          <Header as="h2" color="purple">
            Co-Do
          </Header>
        </Menu.Item>
        <Menu.Item position="right">
          <Button primary>Log in</Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavMenu;
