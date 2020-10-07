import React, {useState,useEffect} from 'react';
import ProductItem from './ProductItem';
import {API_test} from '../const/API_URL';
import axios from 'axios';
export default function Index(){
    const [data, setData] = useState([]);
    useEffect(()=> {
        axios.get(API_test)
    .then(function(res){
        setData(res.data);
    })
    .catch(err => console.log(err))
    }, [])
    return(

        <div className="Product">
           {data.map((item) => 
                <ProductItem name={item.name} price= {item.price} key={item.id}/>
            )} 
        </div>
    );
} 