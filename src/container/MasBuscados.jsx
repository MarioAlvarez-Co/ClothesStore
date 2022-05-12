import React from 'react';
import { Card } from '../components/Card';
import { useApiProduct } from '../hooks/useApiProducts';

import '../styles/MasBuscados.css'
export const MasBuscados=()=>{
   
    return(
        <div className='MasBuscados'>
            <h2>PRODUCTOS MÁS BUSCADOS</h2>
            <div className='products-carrousel'>
                {
                     useApiProduct().map((item)=>
                        <Card key={item.id}productInfo={item}/>
                    )
                }
            </div>
        </div>
    )
}