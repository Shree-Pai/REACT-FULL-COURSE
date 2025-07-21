import { useState } from 'react';
import First from './First';
import SecComp from './SecComp';
function FirstComp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={()=>setShow(!show)}>
        {show ? 'Show Second Component' : 'Show First Component'}
      </button>

      {show&& <p>First Component</p>}
      {!show&& <SecComp/>}
      
    </div>
  );
}

export default FirstComp;
