import { useState } from 'react';

function SecComp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <p>Second Component</p> 
    </div>
  );
}

export default SecComp;
