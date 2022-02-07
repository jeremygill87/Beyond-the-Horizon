import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import fighters from "../Characters";
import "./EnemyStatus.css";
import RightRook from "../../images/Rook_Sprites/Rook_l_s.png";

class EnemyStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enemyName: fighters.Starr.name,
      enemyHealth: fighters.Starr.health,
    };
  }

  render() {
    let healthBar = "---".repeat(this.state.enemyHealth);
    return (
      <Row className="enemyRow">
        <Col>
          <Card className="enemyStatcard">
            <Card.Body>
              <Card.Title>{this.state.enemyName}</Card.Title>
              <Card.Text>{healthBar}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-4'></Col>
        <Col>
          <img src={RightRook} className="enemySprite"></img>
        </Col>
      </Row>
    );
  }
}

export default EnemyStatus;
