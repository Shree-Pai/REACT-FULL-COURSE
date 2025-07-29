import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { ThemeContext } from "./ThemeContext";

function ThemeToggleComponent(){
    const {theme, toggleTheme}= useContext(ThemeContext);

    const style={
        backgroundColor: theme==="light"?'#fff':'#333',
        color: theme==="light"?'#000':'#fff',
        padding:'10px',
        borderRadius:'5px',
        textAlign:'center',
        minHeight:'100vh',
        transition:' all 0.3s ease-in-out',
        fontfamily:'Arial,sans-serif',
        margin:'20px auto',    
        width:'1000px',    
        boxShadow: theme==="light"?'0 0 10px rgba(0,0,0,0.1)':'0 0 10px rgba(255,255,255,0.1)',
        border: theme==="light"?'1px solid #ccc':'1px solid #555',
        fontSize:'20px',
        marginTop:'20px',
        marginBottom:'20px',
        fontWeight:'bold',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    };

    return(
        <div style={style}>
            <h2>Current Theme : {theme.toUpperCase()}</h2>
            <button onClick={toggleTheme}>
                Switch to {theme==="light"?"dark":"light"} Mode</button>
        </div>
    )
}

export default ThemeToggleComponent;