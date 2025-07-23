import { useState } from "react";


function courseList(){

    const [course,setCourse]=useState([
        {id:100,name:'Java Script'},
        {id:200,name:'React'},
        {id:300,name:'Python'},
        {id:400,name:'Java'},
    ])

    const handleDeleteButton = (id)=>{
        const newCourse=course.filter((c)=>c.id!==id)
        setCourse(newCourse);
    }
    return(
        <div>
            <h2>Courses List: </h2>{
                course.map((c)=>(
                    <div key={c.id}>{c.name}
                    <button onClick={()=>handleDeleteButton(c.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default courseList;