import { forwardRef } from "react";

function Child(props,ref){

    return(
        <div>
            <h2>Child Component : </h2>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(Child);