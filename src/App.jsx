import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import EmployeeList from "./components/EmployeeList";

class App extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" size='huge' id='header'>Employee List</Header>
        <EmployeeList />
      </Container>
    );
  };
};

export default App;