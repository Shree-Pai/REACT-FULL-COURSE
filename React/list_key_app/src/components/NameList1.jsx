//Rendering a List of Names

function NameList1(){

    const Students=[
        {id:111,name:"Shree",age:"21"},
        {id:222,name:"Abhi",age:"21"},
        {id:333,name:"Krithi",age:"20"},
        {id:444,name:"Prathzz",age:"16"}
    ]
    return (
        <div>
            <div>
            <h2>Student Lists : </h2>
            {
                Students.map((Student)=>
                    <ul key={Student.id}>
                        <li>Name:{Student.name} Age:{Student.age}</li>
                    </ul>
                   )
            }
        </div>
        </div>
    )
}

export default NameList1;