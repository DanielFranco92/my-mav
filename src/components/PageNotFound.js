import React from "react";
import { Container, Row } from "react-bootstrap";

function PageNotFound(props) {
    /**UTILICE EL STYLE PARA HACERLO RAPIDO */
    return(
        <Container>
            <Row>
                <h5 style={{textAlign: "center", fontSize:"80px"}}>404</h5>  
                <h5 style={{textAlign: "center", fontSize:"80px"}}>NOT FOUND</h5>
            </Row>
        </Container>
    )
}

export default PageNotFound;