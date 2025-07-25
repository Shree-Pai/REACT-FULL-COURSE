import { useEffect } from "react";

function SecondComp(){
    
    useEffect(()=>{
        console.log("useEffect Called....");
    },[])
    return(
        <div>
            <h1>Second Component with useEEfect Hook :</h1>
        </div>
    )
}

export default SecondComp;