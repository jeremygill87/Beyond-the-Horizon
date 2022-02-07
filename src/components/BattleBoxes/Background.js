import React, { Component } from "react";
import { Col, Row, Container, Stack } from "react-bootstrap";
import EnemyStatus from "./EnemyStatus";
import PlayerStatus from "./PlayerStatus";
import SelectionBox from "./SelectionBox";
import "./Background.css";

class Background extends Component {
  render() {
    return (
      <Container fluid className="bg">
        <EnemyStatus />
        <PlayerStatus />
        <SelectionBox />
      </Container>
    );
  }
}

export default Background;
