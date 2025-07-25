import { useRef } from "react";                                                                                                                                                 
function SixthComp(){

    const inputRef=useRef();
    function focus(){
        // let input_obj=document.getElementById("input"); //not a best practice to use document,getelementbyId in React instead use useRef()
        // input_obj.focus();
        inputRef.current.focus();
        inputRef.current.value="Shree";
        inputRef.current.style.color="Blue";
        inputRef.current.style.backgroundColor="rgba(255, 0, 0, 0.5)";
        inputRef.current.style.padding="10px";
        inputRef.current.style.margin="none";
        inputRef.current.style.borderradius="10px";

    }

    return(
        <div>
            <h1>Sixth Component :</h1>
            <input type="text" ref={inputRef}/><br></br><br></br>
            <button onClick={focus}>Focus Input</button>
        </div>                                                                                                  
    )
}  

export default SixthComp;