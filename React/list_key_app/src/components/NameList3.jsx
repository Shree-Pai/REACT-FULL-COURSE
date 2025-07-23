//Removing the items from the a list

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';


function NameList3(){
    const [Students,setStudent]=useState([
        {id:111,name:"Shree",age:"21"},
        {id:222,name:"Abhi",age:"21"},
        {id:333,name:"Krithi",age:"20"},
        {id:444,name:"Prathzz",age:"16"}
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
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Students.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                
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

export default NameList3;