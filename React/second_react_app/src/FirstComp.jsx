import { useState } from 'react';
import First from './First';
import Third from './Third';
function FirstComp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={()=>setShow(!show)}>
        {show ? 'Show Second Component' : 'Show First COmponent'}
      </button>

      {show&& <First/>}
      {!show&& <Third/>}
      
    </div>
  );
}

export default FirstComp;
