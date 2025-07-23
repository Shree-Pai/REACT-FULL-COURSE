import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function NameList5() {
    const [Students, setStudent] = useState([
        { id: 111, name: "Shree", age: "21" },
        { id: 222, name: "Abhi", age: "21" },
        { id: 333, name: "Krithi", age: "20" },
        { id: 444, name: "Prathzz", age: "16" }
    ]);

    const handleDeleteButton = (id) => {
        alert(`Delete Student with ID: ${id}`);
        const newStudent = Students.filter((s) => s.id !== id);
        setStudent(newStudent);
    }

    return (
        <div className='container mt-4'>
            <h2 className='head3'>Student Table:</h2>

            {
                Students.length > 0 ? (
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Students.map((s) => (
                                    <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.age}</td>
                                        <td>
                                            <Button variant="danger" size="sm"
                                                onClick={() => handleDeleteButton(s.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) : (
                    <p>No students available.</p>
                )
            }
        </div>
    );
}

export default NameList5;
