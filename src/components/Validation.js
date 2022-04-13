import React from "react";
import { Container } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'

function Validation(props) {
    return(
        <Container>
            <Alert variant="danger">
            <Alert.Heading>IMPORTANTE!</Alert.Heading>
            <p> {props.value} </p>
            </Alert>
        </Container>
    )
}

export default Validation;