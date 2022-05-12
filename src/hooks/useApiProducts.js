import React from 'react';

const API="https://api.mercadolibre.com/sites/MCO/search?category=MCO1430";

export function useApiProduct(){
    const [Products, setProducts] = React.useState([]);

    React.useEffect(()=>{

        const setResponse = async(URL)=>{
            const response= await fetch(URL);
            const data=await response.json();            
            setProducts(data.results);            
        }
            setResponse(API);               
    }    
    ,[])

    return Products;
   
}