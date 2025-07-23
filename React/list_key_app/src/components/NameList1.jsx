function NameList1(){
    const Students=[
        {id:111,name:"Shree"},
        {id:222,name:"Abhi"},
        {id:333,name:"Krithi"},
        {id:444,name:"Prathzz"}
    ]
    return (
        <div>
            <h2>Student Names: </h2>
            {
                Students.map((Student) =>
                    <ul key={Student.id}>
                        <li>{Student.name}</li>
                    </ul>
                )
            }
        </div>
    )
}

export default NameList1;