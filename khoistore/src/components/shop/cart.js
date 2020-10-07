import React, { useContext } from 'react'
import {CartContext} from '../reducer/CartContext';
export const  Cart =()=>{
    const [cart] = useContext(CartContext);    
    const price = cart.reduce((a,b) => a + b.price , 0 )
    return (
        <div className="Product-cart">
            <div className="Product-cart_item">
                <h2 className="Product-cart_items__title"> Total Items </h2>
                <h4 className="Product-cart_items__content">{
                cart.length                 
                }</h4>
            </div>
            <div className="Product-cart_item">
                <h2 className="Product-cart_price__title"> Total Price </h2>
                <h4 className="Product-cart_price__content"> {price}</h4>
            </div>
        </div>
    );
}