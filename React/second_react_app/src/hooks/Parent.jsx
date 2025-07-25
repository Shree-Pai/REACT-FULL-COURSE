import { useRef } from "react";
import Child from "./Child";
function Parent(){

    let inputRef=useRef(null);
    function handleButton(){
        inputRef.current.style.color="Blue";
        inputRef.current.style.backgroundColor="rgba(255, 0, 0, 0.5)";
        inputRef.current.style.padding="10px";
        inputRef.current.style.margin="none";
        inputRef.current.style.borderRadius = "10px";
    }
    return(
        <div>
            <h1>Parent Component</h1>
            <Child ref={inputRef}/><br></br>
            <button onClick={handleButton}>Update</button>
        </div>
    )
}

export default Parent;