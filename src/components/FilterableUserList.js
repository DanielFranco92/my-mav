import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import Validation from "./Validation";

function FilterableUserList(props) {
    const[filterText, setfilterText] = useState(); /**NO LE AGREGUE UN VALOR. POR DEFECTO BUSCARA UNDEFINED. CAMBIARIA EL CIRCUITO PERO YA ES TARDE. LO DEJO ASI*/
    const[show, setShow] = useState();

    const handleFilterTextChange = (filterText) => {
        if(filterText === 'react'){
            setShow('NO ESTA PERMITIDA LA PALABRA REACT');
            return;
        }else if(filterText.length === 0) {
            setShow('DEBE INGRESAR ALGO EN EL CAMPO');
            return;
        }else if(filterText.length < 4) {
            setShow('LA PALABRA DEBE TENER COMO MINIMO 4 LETRAS');
            return;
        }
        setfilterText(filterText);
        setShow('');
    }

    return(
        <Container>
            <Row>
                <SearchBar onFilterTextChange={handleFilterTextChange} filterText={filterText}/>
            </Row>
            <Row>
                {show ? <Validation value={show}/> : <UserList filterText={filterText}/>}
            </Row>
        </Container>
    )
}

export default FilterableUserList;