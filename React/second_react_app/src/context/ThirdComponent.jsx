import { useContext } from "react";
import { UserContext } from "./userContext";

function ThirdComponent(){

    const userName =useContext(UserContext);
    return( 
        <div>
            <h2>Third Component : </h2>
            <h2>Welcome : {userName}</h2>
        </div>
    )
}

export default ThirdComponent;  