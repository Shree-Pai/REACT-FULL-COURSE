import { useDispatch } from "react-redux"
import { addToCart } from "../new_redux/action";


const products = [
    { id: 100,name:'IPhone', price:150000},
    { id: 200,name:'Del_Laptop', price:100000},
    { id: 300,name:'Asus_Laptop', price:85000},
    { id: 400,name:'Samsung Mobile', price:75000}
]

function ProductList(){

    const dispatch = useDispatch();

    return(

        <div>
            <h2>Products : </h2>
            {products.map(product=>(
                <div key={product.id} 
                style={{marginBottom:'10px',
                        boxShadow:'0 1px 3px rgba(0,0,0,0.3)',
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center',
                        padding:'10px',
                        borderRadius:'5px'}}>
                    <span>{product.name} :: {product.price}</span>
                    <button 
                    style={{marginLeft:'10px'}}
                    onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList;