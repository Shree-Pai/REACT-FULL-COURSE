import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(10);
    // function Update()
    // {
    //     setCount(count+1);
    // }
    console.log("....................................");
    
    return(
        <div>
            <h2>Counter:{count} </h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default Counter;