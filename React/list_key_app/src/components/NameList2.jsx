//Displaying an Array of Objects

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

function NameList2(){
    const Students=[
        {id:111,name:"Shree",age:"21"},
        {id:222,name:"Abhi",age:"21"},
        {id:333,name:"Krithi",age:"20"},
        {id:444,name:"Prathzz",age:"16"}
    ]
    //Function to handle delete button click that alerts the ID of the student
    const handleDeleteButton=(id)=>{
        alert(`Delete Students with ID : ${id}`);
    }
    return(
        <div className='container mt-4'>
            <h2 className='head3'>Student Table:</h2>
            {/*Bootstrap table*/ }
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
        </div>
    )
}

export default NameList2;