import React from 'react';
import'../styles/Footer.css'
import facebookIcon from'../Assets/Icons/facebook.svg';
import instagramIcon from '../Assets/Icons/twitter.svg';
import twitterIcon from '../Assets/Icons/instagram.svg';
import youtubeIcon from '../Assets/Icons/youtube.svg';
export const Footer=()=>{
    return(
        <footer>
            <ul className='list-Footer'>
                <h2 className='title-footer'>POLÍTICAS</h2>
                <li>Política de privacidad </li>
                <li>Política de cambio</li>
                <li>Política de  envío</li>
                <li>Terminos y Condiciones</li>
                <li>Responsabilidad Social</li>
            </ul>
            <ul className='list-Footer'>
                <h2 className='title-footer'>SOBRE NOSOTROS</h2>
                <li>Encuentra tu tienda</li>
                <li>Contáctanos</li>
                <li>Trabaja con Nosotros</li>                
            </ul>
            <ul className='list-Footer social-media-list'>
                <h2 className='title-footer'>SIGUENOS EN:</h2>
                <div className='social-media-list'>

                    <li><img src={facebookIcon} alt="" /></li>
                    <li><img src={instagramIcon } alt="" /></li>
                    <li><img src={twitterIcon} alt="" /></li>                
                    <li><img src={youtubeIcon} alt="" /></li>                
                </div>
            </ul>
        </footer>
    )
}