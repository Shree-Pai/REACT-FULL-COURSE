import useCounter from "./useCounter";

function ThirdCounter(){
    
    const {count,increment,decrement,reset}=useCounter(30);
    return(
        <div>
            <h1>Third Counter : </h1>
            <h2>Count :{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ThirdCounter;