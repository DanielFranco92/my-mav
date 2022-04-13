import React from "react";
import {
    Link, 
} from "react-router-dom";

function User(props) {

 return(
    <Link to={'/' + props.item.login}>
        <b>Login: </b> <span>{props.item.login} </span> 
        <b>ID: </b> <span>{props.item.id}</span>
    </Link>
   )
}

export default User;