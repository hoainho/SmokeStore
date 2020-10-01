import {CartContext} from '../reducer/CartContext';
import React, {useContext} from 'react';
export default function ProductItem(props){
    const [cart, setCart] = useContext(CartContext);
    const addtocart = (item) =>{
        
        
    setCart(currentState => [...currentState, item]);
    }
    return(
        <div className="Product-item">
            <img src=".././image/product.jpg" alt="prophoto" />
            <h2 className="Product-item_name">{ props.name }</h2>
            <h4 className="Product-item_price">{props.price}</h4>
            <button onClick={()=>addtocart({name: 'hh', price: 213})} type="button" class="btn btn-success">Add to Cart</button>
            

            {/* <ProductDetails /> */}
            
        </div>
    );
}