import React from 'react';
import ProductItem from './ProductItem';
export default function index(){
    const database = [
        {name : "t-shift",price: 50,id : 1},
        {name : "hoodie",price: 29,id : 2},
        {name : "polo",price: 87,id : 3},
        {name : "t-shift",price: 50,id : 1},
        {name : "hoodie",price: 29,id : 2},
        {name : "polo",price: 87,id : 3},
    ]
    return(
        
        <div className="Product">
           {database.map((item) => 
                <ProductItem name={item.name} price= {item.price} key={item.id}/>
            )}
        </div>
    );
}