import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap'

class Background extends React.Component {
    render() {
        return (
            <Container fluid>
        <Row>
            <Col>Enemy Status</Col>
            <Col>Enemy Avatar(s)</Col>
        </Row>
        <Row>
            <Col>Player Avatars</Col>
            <Col>Player Status</Col>
        </Row>
        <Row>
            <Col>PLAYER SELECTION</Col>
        </Row>
    </Container>
        )
    
    }
}

export default Background;