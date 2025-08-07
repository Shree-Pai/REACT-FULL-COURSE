
import './App.css'
import FormComp from './FormComp';
// import Card from './Card';
// import StateComp from './StateComp';
// import Button from './Button';
// import Data from './Data';
// import PropComp from './PropComp';

function App() {
  

  // const handleClick=()=>{
  //   alert("Button Clicked");
  // }

  return (
    <div>
      <h1>This is My Typescipt App</h1>
      {/* <Data/> */}
      {/* <PropComp name="Shree" /> */}
      {/* <Button label='Click' onClick={handleClick}/>
      <Button label='Disable Button' onClick={handleClick} disabled={true}/> */}
      {/* <Card>
        <h3>Card Title</h3>
        <p>This is a simple Card with custom styles.</p>
      </Card>
      <Card style={{background:'#646cff',
        marginTop:'50px'
        
      }}>
        <h3>Style Card</h3>
        <p>This is a card with custom styles passed via props.</p>
      </Card> */}
      {/* <StateComp/> */}
      <FormComp/>
    </div>
  )
}

export default App;
