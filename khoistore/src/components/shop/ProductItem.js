import { CartContext } from '../reducer/CartContext';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { API_color } from '../const/API_URL';
export default function ProductItem(props){
    const [cart,setCart] = useContext(CartContext);
    const [color, setColor] = useState([]);
    const addtocart = () => {
        const items = { name  : props.name , price : props.price };    
        setCart(currentState => {return ([...currentState, items]) });
    }
    useEffect( () => {
        axios.get( API_color )
        .then(res => { setColor(res.data) })
        .catch(err => { throw(err) })
    },[]);
    function colorPicker(color) {
        return{ backgroundColor : color };
    };
    function onSetColor(color) {
        props.onReciverColor(color);
    }
    let colorMap;
    // loading for map color
    color.length === 0 
    ? colorMap = ( <h1> .. </h1> ) 
    : colorMap = color.map((colorItem) => {
        return (
            <span className="Product-item_listColor__item" 
            key={colorItem.id} 
            style={ colorPicker(colorItem.color) }
            onClick= { () => onSetColor(colorItem.color)} 
            ></span>
            )
    });
    
    return(
        <div className="Product-item">
            <img src=".././image/product.jpg" alt="prophoto" />
            <div className="Product-item_listColor">
                {colorMap}
            </div>
            <h2 className="Product-item_name">{ props.name }</h2>
            <h4 className="Product-item_price">{props.price}</h4>
            <button onClick={() => addtocart()} type="button" className="btn btn-success">Add to Cart</button>
        </div>
    );
}