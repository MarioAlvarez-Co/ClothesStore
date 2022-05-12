import React from 'react';


 

 export const useInitialState=()=>{
    const [state, setstate] = React.useState([]);
     
   
    return{
        state,setstate
    }
 }

 