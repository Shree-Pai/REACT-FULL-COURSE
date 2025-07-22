import { useState } from "react";
function FirstEvent()
{
    // const[text,setText]=useState('');
    // const handleClick=(event)=>{
    //     setText(event.target.value);
    // const [name,setName]=useState('');
    // const handleSubmit=()=>{
    //         alert(`Form Submitted by:${name}`);
    // const handleMouseEnter=()=>{
    //     console.log("Mouse Entered the Box!")
    // }
    // const handleMouseLeave=()=>{
    //     console.log("Mouse left the Box!")
    
    // }

    // const greet=(name)=>{
    //     alert(`Welcome ${name} to React Session`)
    // }
    // const handleKeyDown=(event)=>{
    //     alert(`Key Pressed: ${event.key}`)
    // }
    const handleKeyDown=(event)=>{
        if(event.key=='Enter'){
            alert(`Welcome to React Session`)
        }
        
    }
    return(
      
        // <center>
        //     <h2>React Event: </h2>
        //     {/* <button onClick={(handleClick)}>Click</button> */}

        //     {/* <input type="text" placeholder="Enter Text" onChange={handleClick}/>
        //     <p>Your Text :{text}</p> */}

        //     {/*form event*/}
        //         {/* <form onSubmit={handleSubmit}>
        //             <h2>Enter Name:</h2>
        //             <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/><br></br>
        //             <button type="submit">Submit</button>
        //         </form> */}

        //         {/* mouse event */}
        //         <div onMouseEnter={handleMouseEnter}
        //         onMouseLeave={handleMouseLeave}
        //         style={{
        //             width:"200px",
        //             height:"200px",
        //             backgroundColor:"lightblue",
        //             textAlign:"center",
        //             lineHeight:"200px"
        //         }}>
        //             Hover Over Me!!
        //         </div>
        // </center>
        //   <div>
        //     <button onClick={()=>greet("Shree")}>Greet</button>
        // </div>
        <div>
            <h2>Type Something:</h2>
            {/* <input type="text" onKeyDown={handleKeyDown}/> */}
            <input type="text" onKeyUp={handleKeyDown}/>
            
        </div>
    )
}
export default FirstEvent;