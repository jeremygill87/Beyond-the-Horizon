import React, { Component } from 'react';
import { Col, Row, Container, Stack } from 'react-bootstrap';
import EnemyStatus from './EnemyStatus';
import './Background.css';
import Rook from '../../images/Rook_r_s.png';

class Background extends Component {
    render() {
        return (
            <Container fluid>
        <Row>
            <Stack>
                <EnemyStatus/>
            </Stack>   
            <Col lg={{ span: 4, offset: 4 }}>Enemy Avatars</Col>
        </Row>
        <Row>
            <Col><img src={Rook} className='sprite'></img></Col>
            <Col>Player Status</Col>
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