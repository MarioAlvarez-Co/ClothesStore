import React from 'react';
import { Banner } from '../container/Banner';
import { Footer } from '../container/Footer';

import { MasBuscados } from '../container/MasBuscados';

export const Home =()=>{
    
    return(
        <div className='Home'>
            
            <Banner/>
            <MasBuscados/>
            <Footer/>
        </div>
    )
}