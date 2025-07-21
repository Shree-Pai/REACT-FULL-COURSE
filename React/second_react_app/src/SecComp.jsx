import { useState } from 'react';
import FirstComp from './FirstComp';
function SecComp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* <button onClick={()=>setShow(!show)}>
        {show ? 'Show First Component' : 'Show Second COmponent'}
      </button> */}

      {show&& <FirstComp/>}
      
    </div>
  );
}

export default SecComp;
