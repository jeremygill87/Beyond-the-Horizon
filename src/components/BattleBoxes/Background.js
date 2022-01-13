import React, { Component } from 'react';
import { Col, Row, Container, Stack } from 'react-bootstrap';

class Background extends Component {
    render() {
        return (
            <Container fluid>
        <Row>
            <Stack>
                <div className='bg-light border'>First Enemy Health and shit</div>
            </Stack>   
        </Row>
        <Row>
            <Col>Player Avatars</Col>
            <Col>Player Status</Col>
        </Row>
        <Row>
            <Stack direction='horizontal' gap={8}>
                <div className='bg-light border'>ATTACK</div>
                <div className='bg-light border'>ITEM</div>
                <div className='bg-light border'>INFO</div>
                <div className='bg-light border'>FLEE</div>
            </Stack>
        </Row>
    </Container>
        )
    
    }
}

export default Background;