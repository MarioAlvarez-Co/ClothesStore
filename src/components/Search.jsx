import React from 'react';

import {  useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import'../styles/Search.css'
import { useApiProduct } from '../hooks/useApiProducts';

export const Search=()=>{    
    const navigate = useNavigate()  
    const productsApi =useApiProduct()
    const {setstate} = React.useContext(AppContext)      
    let searchedProducts ;
    function handleInput(event){                
        const search=event.target.value.toLowerCase()        
        searchedProducts =  productsApi.filter((item)=>item.title.toLowerCase().includes(search))                        
        navigate("/search-products")         
        setstate(searchedProducts)                      
    }
        
    return(
        <div className='Search'>
            <input onChange={handleInput} className='input-search' type="text" placeholder='Busca aqui tus productos'/>
            <div className='search-icon'> </div>
        </div>

    )

} 