import React, { Component } from 'react';
import { Col, Row, Container, Stack } from 'react-bootstrap';
import EnemyStatus from './EnemyStatus';
import PlayerStatus from './PlayerStatus';
import './Background.css';

class Background extends Component {
    render() {
        return (
            <Container fluid className='bg'>
        <Row>
            <Stack>
                <EnemyStatus/>
            </Stack>   
        </Row>
        <Row>
            <PlayerStatus/>
        </Row>
        <Row >
            <Stack direction='horizontal' gap={8}>
                <div class='bg-light border'>ATTACK</div>
                <div class='bg-light border'>ITEM</div>
                <div class='bg-light border'>INFO</div>
                <div class='bg-light border'>FLEE</div>
            </Stack>
        </Row>
    </Container>
        )
    
    }
}

export default Background;