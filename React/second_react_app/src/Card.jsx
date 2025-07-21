function Card(props){
    return(
        // <div>
        // <h2>Welome : {name}</h2>
        // <p>City : {city}</p>
        // </div>

        <div>
            <h2>Card Component:</h2>
            <button onClick={props.onClick}>{props.label}</button>
        </div>
    )
}
export default Card;