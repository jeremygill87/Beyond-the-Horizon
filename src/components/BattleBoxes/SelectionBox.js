import React, { Component } from "react";
import { Row, Col, Nav, Container } from "react-bootstrap";
import "./SelectionBox.css";

class SelectionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attack: false,
      item: false,
      info: false,
      flee: false,
    };
  }
  render() {
    document.addEventListener('keydown', function(event) {
      console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`)
    })
    return (
      <Container fluid className='selectBox'>
        <Nav fill>
          <Nav.Item className='selectOptions'>ATTACK</Nav.Item>
          <Nav.Item className='selectOptions'>ITEM</Nav.Item>
          <Nav.Item className='selectOptions'>INFO</Nav.Item>
          <Nav.Item className='selectOptions'>FLEE</Nav.Item>
        </Nav>
      </Container>
    );
  }
}

export default SelectionBox;
