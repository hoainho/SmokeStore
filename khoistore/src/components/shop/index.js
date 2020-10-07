import React, {useState,useEffect} from 'react';
import ProductItem from './ProductItem';
import {API_test} from '../const/API_URL';
import axios from 'axios';
export default function Index(){
    const [data, setData] = useState([]);
    
    useEffect(()=> {
        axios.get(API_test)
            .then( res  => { setData(res.data) })
            .catch(err  => { throw(err) })
    }, [])
    let item //temp
    data.length === 0 ? //if data state = null
    item = ( <h1> Loadingg </h1>) //animation loadding
    : //else data != null
    item = (
        data.map((item) => 
            <ProductItem name={item.name} price= {item.price} key={item.id}/>
        ))
    return(
        
        <div className="Product">
            <div className="Product__toolbar">
                <div className="Product__toolbar-list">
                    <select name="sortName" id="input" className="form-control Product__toolbar-list__sort">
                        <option value="1">A {'->'} Z</option>
                        <option value="-1">Z {'->'} A</option>
                    </select>
                    <input type="search" name=""  className="form-control Product__toolbar-list__search" placeholder="Enter your Keyword"/>
                    <select name="sortPrice" id="input" className="form-control Product__toolbar-list__sort">
                        <option value="1">Increase</option>
                        <option value="-1">Decrease</option>
                    </select>
                </div>
            </div>
            <div className="Product__state">
                {item}  
            </div>
           
        </div>
    );
} 