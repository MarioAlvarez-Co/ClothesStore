import React from 'react';
import { Carrousel } from '../components/Carrusel';
import'../styles/Banner.css'
    export const Banner=()=>{
        return(
            <div className='Banner'>               
                <Carrousel/>
                <div className='Featured-Categories'>
                    <figure>
                        <h3>MODA INFANTIL</h3>
                        <img src={require('../Assets/images/categorias-destacadas-moda-infantil.png')} alt="Moda Infantil" />
                    </figure>
                    <figure> 
                        <h3>PROTECCION</h3>
                        <img src={require('../Assets/images/categorias-destacadas-proteccion.png')} alt="Proteccion" />
                    </figure>

                </div>                
            </div>
        )
    }