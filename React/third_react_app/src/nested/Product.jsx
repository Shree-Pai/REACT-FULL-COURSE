import { useSearchParams } from "react-router-dom";

function Product(){

    const [searchParams,setSearchParams] = useSearchParams();
    const category = searchParams.get("category");
    const price = searchParams.get("price");

    return(
        <div>
            <h2>Product Component : </h2>
            <p><strong>Category : {category} </strong></p>
            <p><strong>Price : {price}</strong></p>
            <hr />
            <button onClick={()=>setSearchParams({category:"Dell Laptop", price:"90000"})}>Dell Laptop for 90000</button>
            <button onClick={()=>setSearchParams({category:"HP Laptop", price:"50000"})}>HP Laptop for 50000</button>
        </div>
    )
}

export default Product;