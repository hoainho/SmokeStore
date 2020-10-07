import {CartContext} from '../reducer/CartContext';
import React, {useContext} from 'react';
export default function ProductItem(props){
    const [cart, setCart] = useContext(CartContext);
    const addtocart = () => {
    const items = { name  : props.name , price : props.price };    
    setCart(currentState => [...currentState, items]);
    }
    return(
        <div className="Product-item">
            <img src=".././image/product.jpg" alt="prophoto" />
            <h2 className="Product-item_name">{ props.name }</h2>
            <h4 className="Product-item_price">{props.price}</h4>
            <button onClick={() => addtocart()} type="button" class="btn btn-success">Add to Cart</button>
            

            {/* <ProductDetails /> */}
            
        </div>
    );
}