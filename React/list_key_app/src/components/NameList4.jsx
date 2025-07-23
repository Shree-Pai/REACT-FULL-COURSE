//Adding a New User

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function NameList4(){
    const [Students,setStudent]=useState([
        {id:111,name:"Shree",age:"21"},
        {id:222,name:"Abhi",age:"21"},
        {id:333,name:"Krithi",age:"20"},
        {id:444,name:"Prathzz",age:"16"}
    ])
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleAddStudent = () => {
        const newStudent = {
            id: Date.now(),
            name,
            age
        };

        setStudent([...Students, newStudent]);
        setName('');
        setAge('');
    };
    return(
        <div className='container mt-4'>
            <h2 className='head3'>Student Table:</h2>
            
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Students.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(s) => setName(s.target.value)}
                    />
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Your Age"
                        value={age}
                        onChange={(s) => setAge(s.target.value)}
                    />
                </Form.Group>
            </Form>
            <Button variant="success" onClick={handleAddStudent}>Add</Button>

        </div>
    )
}

export default NameList4;