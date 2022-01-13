import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import fighters from '../Characters';

class EnemyStatus extends Component {
    constructor (props) {
        super(props);
        this.state = {
            enemyName: fighters.Starr.name,
            enemyHealth: fighters.Starr.health
        }
        
    }

    render() {

        let healthBar = '-'.repeat(this.state.enemyHealth)
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.state.enemyName}</Card.Title>
                    <Card.Text>{healthBar}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default EnemyStatus;