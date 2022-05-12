import React from 'react';
import { Header } from '../components/Header';
import { NavCategories } from '../components/NavCategories';

export const HeaderContainer=()=>{
        return(
                <div className='HeaderContainer'>
                        <Header></Header>
                        <NavCategories></NavCategories>
                </div>
        )
}