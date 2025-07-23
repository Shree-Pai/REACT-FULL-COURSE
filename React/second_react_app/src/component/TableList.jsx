function TableList(){

    const Students=[
        {id:111,name:"Shree",city:"Mangalore"},
        {id:222,name:"Abhi",city:"Mangalore"},
        {id:333,name:"Krithi",city:"Mangalore"},
        {id:444,name:"Prathzz",city:"Mangalore"}
    ]
    return(

        <div>
            <h2>Student Table : </h2>
            <table border="2" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    Students.map((s)=>(
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.city}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    )
}

export default TableList;