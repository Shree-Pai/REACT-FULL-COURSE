import { useState,useEffect } from "react";

function FourthComp(){


    const[count,setCount]=useState(0);
    const[theme,setTheme]=useState("light");


    useEffect(()=>{
        console.log("Count useEffect Called...");
        console.log(`Count : ${count}`);
    },[count])


    useEffect(()=>{
        console.log("Theme useEffect Called...");
        console.log(`Theme : ${theme}`);
    },[theme])
    return(
        <div>
            <h1>Fourth Component : </h1>
            <h2>Count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button><br /><br />
            <h2>Theme: {theme}</h2>
            <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Change Theme</button>
        </div>
    )
}

export default FourthComp;