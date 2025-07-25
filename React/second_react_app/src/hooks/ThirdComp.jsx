import { useEffect,useState } from "react";

function ThirdComp(){


    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("useEffect called...")
        console.log(`Count : ${count}`)
    },[count])
    function increment(){
        setCount(count+1);
    }
    return(
        <div>
            <h1>Third Component :</h1>
            <h2>Count :{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default ThirdComp;