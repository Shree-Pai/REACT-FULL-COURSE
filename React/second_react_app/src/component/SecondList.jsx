function SecondList(){


    const Students=[
        {id:111,name:"Shree",city:"Mangalore"},
        {id:222,name:"Abhi",city:"Mangalore"},
        {id:333,name:"Krithi",city:"Mangalore"},
        {id:444,name:"Prathzz",city:"Mangalore"}
    ]
    return (
        <div>
            <h2>Student Lists : </h2>
            {
                Students.map((Student)=>
                    <p key={Student.id}>Name:{Student.name} City:{Student.city}</p>)
            }
        </div>
    )
}

export default SecondList;