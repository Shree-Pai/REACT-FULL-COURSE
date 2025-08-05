import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../new_redux/action"; 

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart) || [];

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    let totalAmount = 0;
    cartItems.forEach(item => {
        totalAmount += item.price * item.quantity;
    });

    return (
        <div>
            <h2>Cart Page :</h2>
            {cartItems.length === 0 && <p>Cart is Empty</p>}
            <ul style={{listStyleType:'none',padding:0,margin:0}}>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} : {item.price} Rupees || Quantity: {item.quantity} || Total Price: {item.price * item.quantity}
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h4>Total Amount in Cart : {totalAmount} Rupees</h4>
        </div>
    );
}

export default Cart;
