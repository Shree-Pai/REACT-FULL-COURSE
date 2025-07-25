import useCounter from "./useCounter";

function FirstCounter(){

    const {count,increment,decrement,reset}=useCounter(10);
    return(
        <div>
            <h1>First Counter : </h1>
            <h2>Count :{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default FirstCounter;