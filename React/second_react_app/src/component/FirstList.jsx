function FirstList(){
    const city=["Mangalore","Mysore","Bangalore","Mumbai","Hyderabad"]


    return (
        <div>
            <center>
            <h2>City List : </h2>
            {
                city.map((c_name,c_index)=>
                <p key={c_index}>{c_name}</p>)
            }
            </center>
        </div>
    )
}

export default FirstList;