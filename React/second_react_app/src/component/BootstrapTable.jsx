import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';


function BootstrapTable(){
    const [Students,setStudent]=useState([
        {id:111,name:"Shree",city:"Mangalore"},
        {id:222,name:"Abhi",city:"Mangalore"},
        {id:333,name:"Krithi",city:"Mangalore"},
        {id:444,name:"Prathzz",city:"Mangalore"}
    ])
    const handleDeleteButton=(id)=>{
        alert(`Delete Students with ID : ${id}`);
        const newStudent=Students.filter((s)=>s.id!==id)
        setStudent(newStudent);
    }
    return(
        <div className='container mt-4'>
            <h2 className='head3'>Student Table:</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Students.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.city}</td>
                                
                                <td>
                                    <Button variant="danger" size="em"
                                    onClick={()=>handleDeleteButton(s.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default BootstrapTable;