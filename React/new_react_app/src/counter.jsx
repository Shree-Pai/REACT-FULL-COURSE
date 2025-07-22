import { useState } from "react";

function Counter({initialValue}){
  const[count,setCount]=useState(initialValue);
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>count>0 && setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(initialValue)}>Reset</button>
    </div>

  )
}

export default Counter;
