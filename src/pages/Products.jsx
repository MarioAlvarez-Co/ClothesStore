import React from 'react';
import { Card } from '../components/Card';
import { AppContext } from '../context/AppContext';
import'../styles/Products.css'
export const Products =()=>{
    const {state}=React.useContext(AppContext);
    
    return(
        <div className='Products'>            
            {state.map((item)=>
                <Card key={item.id} productInfo={item}/>
            )}
            
        </div>
    )
}