import { useState } from 'react';

function NewComp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={()=>setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>

      {show&& <p>This is my secret message......</p>}
      
    </div>
  );
}

export default NewComp;
