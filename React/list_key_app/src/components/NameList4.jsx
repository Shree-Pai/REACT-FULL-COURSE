//Adding a New User

import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function NameList4() {
    const [Students, setStudent] = useState([
        { id: 100, name: "Shree" },
        { id: 101, name: "Abhi" },
        { id: 102, name: "Krithi" },
        { id: 103, name: "Prathzz" }
    ]);
    const [nextId, setNextId] = useState(104);
    const [name, setName] = useState('');
    //Handles new student addition
    const handleAddStudent = () => {
        if (name.length == 0) {
    alert('Please enter a name!');
    return;
}
        //Creating a new user object
        const newUser = {
            id: nextId,
            name: name
        };
        //Adding new user to the list
        setStudent([...Students, newUser]);
        setNextId(prevId => prevId + 1);
        setName('');
    };

    return (
        <div>
            <h2>Student Names: </h2>
            {/*A form to take the Input*/}
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Enter new name"
                    value={name}
                    onChange={(s) => setName(s.target.value)}
                />
                <br />
                <Button variant="success" onClick={handleAddStudent}>
                    Add User
                </Button>
            </Form.Group> <br />
            {/*Displaying the list of names*/}
            <ListGroup >
                {
                    Students.map((Student) => ( 
                        <ListGroup.Item key={Student.id}>
                            {Student.id} - {Student.name} {/*Displaying ID and Name*/}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
    );
}

export default NameList4;