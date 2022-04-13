import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Error from "./Error";
import Spinner from "./Spinner";

function Profile(props){
    let { user } = useParams(); 

    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    useEffect(() => {
        const getData = () => {
            axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(response => {
                // handle success
                console.log(response);
                setItems(response);
                setIsLoaded(true);
            })
            .catch(error => {
                // handle error
                console.log(error.response.request.status);
                setError(error.response.request.status);
            });
        }
        getData();
    },[])

    if (error) {
        return <Error status={error}/>
    } else if (!isLoaded) {
        return <Spinner/>
    } else {
        return(
        <Container>          
            <Row className="justify-content-md-center">
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={items.avatar_url} />
                <Card.Body>
                <Card.Title>{items.login}</Card.Title>
                <Card.Text>
                    {items.bio}
                </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem><b>Followers:</b> {items.followers}</ListGroupItem>
                <ListGroupItem><b>Following:</b> {items.following}</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Card.Link href={items.html_url}>Card Link</Card.Link>
                <Card.Link href={items.blog}>Blog Link</Card.Link>
                </Card.Body>
            </Card> 
            </Row>
        </Container>
    )}
}

export default Profile;