

function Data(){

    let userName: string = "Shree";
    let age:number = 30;
    let isActive:boolean =true;

    const course : string[] = ["React","Angular","Vue"];

    type Employee ={
        id:number;
        name:string;
        city:string;
    }
    const emp1:Employee={
        id:100,
        name: "Shree",
        city:"Mangalore"
    }
    return(
        <div>
            <h2>User Profile : </h2>
            <p>Name: {userName}</p>
            <p>Age:{age}</p>
            <p>Is Active : {isActive?"YES":"NO"}</p>
            <p>Employee Id : {emp1.id}</p>
            <p>employee Name : {emp1.name}</p>
            <p>Employee City : {emp1.city}</p>
            <ul>
                {course.map((c,index)=>(
                    <li key={index}>
                        {c}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Data;