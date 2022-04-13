import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar(props) {
    const inputField = React.createRef();

    const handleFilterTextChange = (e) => {
        e.preventDefault();
        props.onFilterTextChange(inputField.current.value);
    }

    return(
        <Form onSubmit={handleFilterTextChange}>
            <InputGroup className="mb-3">
                <FormControl
                type="text"
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="basic-addon2"
                defaultValue={props.filterText} 
                ref={inputField}
                />
                <Button variant="outline-secondary" id="button-addon2" type="submit">
                Button
                </Button>
            </InputGroup>
        </Form>
    )
}


export default SearchBar;