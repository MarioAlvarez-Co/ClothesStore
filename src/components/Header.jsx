import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import { Search } from './Search';

 export const Header=()=>{
    return(
        <header className='Header'> 
            <Link to={"/"}> 
                <h1>CLOTHESSTORE</h1>
            </Link>            
            <Search></Search>
            <div className='miscellany'>
                <span className='cart'></span>
                <span className='user-icon'></span>
                <button className='loggin-button'> Iniciar sesión</button>
            </div>
        </header>
    );
}