import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import fighters from '../Characters';
import './PlayerStatus.css';
import Rook from '../../images/Rook_Sprites/Rook_r_s.png';

class PlayerStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: fighters.Rook.name,
            playerHealth: fighters.Rook.health
        };
    }

    render() {
        let healthBar = '---'.repeat(this.state.playerHealth);
        return (
            <Row>
                <Col className='playerSpace'><img className='sprite' src={Rook}/></Col>
                <Col className='statusColumn'>
                    <Row className='statusRow'>
                        <Card className='playerStatcard'>
                    <Card.Title>{this.state.playerName}</Card.Title>
                    <Card.Text>{healthBar}</Card.Text>
                </Card>
                    </Row>
                </Col>
                </Row>
                
        )
    }
}

export default PlayerStatus;