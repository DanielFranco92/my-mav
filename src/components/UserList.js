import React, { useEffect, useState } from "react";
import axios from "axios";
import {ListGroup} from 'react-bootstrap';
import User from "./User";
import Error from "./Error";
import Validation from "./Validation";
import Spinner from "./Spinner";

function UserList(props) {
    let CantUsuario = 10;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios.get(`https://api.github.com/search/users?q=${props.filterText}&per_page=${CantUsuario}`)
            .then(response => {
                return response.data.items;
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
    },[props.filterText]);

    
    if (error) {
        return <Error status={error}/>
    } else if (!isLoaded) {
        return <Spinner />
    } else if (items.length === 0){
        return <Validation value="NO HAY REGISTROS"/>
    } else {
        return (
        <div>
            <nav>
                <ListGroup>
                    {items.map(element => (
                    <ListGroup.Item key={element.id}>
                        <User item={element} />
                    </ListGroup.Item>
                    ))}
                </ListGroup>
            </nav> 
        </div>
    )}  
}

export default UserList;