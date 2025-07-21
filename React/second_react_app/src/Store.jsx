import { useState } from "react";
function Store()
{
    // let data=10;
    const [data, setData]=useState(10);
    function updataData(){
        setData(20);
        alert(`Data: ${data}`);
    }
    console.log("..............");
    
    return(
        <div>
            <h2>Store Component : </h2>
            <h3>Data : {data} </h3>
            <button onClick={updataData}>Update Data</button>
        </div>
    )
}

export default Store;