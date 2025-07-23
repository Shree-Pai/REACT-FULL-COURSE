import EmployeeCard from "./EmployeeCard";

function EmployeeList(){

    const employees=[
        {id:111,name:"Shree",city:"Mangalore"},
        {id:222,name:"Abhi",city:"Mangalore"},
        {id:333,name:"Krithi",city:"Mangalore"},
        {id:444,name:"Prathzz",city:"Mangalore"}
    ]
    return (
        <div>
           
            <h2>Employee List : </h2>
            {
                employees.map((employee)=>
                <EmployeeCard key={employee.id} name={employee.name} city={employee.city}/>
                )
            }
           
        </div>
    )
}

export default EmployeeList;