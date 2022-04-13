import React from "react";
import { Spinner, Container,  Row} from "react-bootstrap";

function spinner(props) {
    return(
        <Container>          
            <Row className="justify-content-md-center">
                <Spinner animation="grow" style={{width:"15rem", height:"15rem"}}/>
            </Row>        
        </Container>    
    )
}

export default spinner;