import React from 'react';
import bannerImage from'../Assets/images/banner-principal-desktop.png'
import bannerImage2 from '../Assets/images/pexels-lumn-322207.jpg'
import '../styles/Carrousel.css'
 export const Carrousel=()=>{
    const imagesBanner=[bannerImage,bannerImage2];

    const [selectedIndex, setselectedIndex] = React.useState(0);
    const [selectedImage, setSelectedImage] = React.useState(imagesBanner[0]);

    const selectNewImage=(index,images,next=true)=>{
        const condition=next?selectedIndex<imagesBanner.length-1:selectedIndex>0;
        const nextIndex =
            next?
                condition? 
                selectedIndex+1:0
                : condition?
                selectedIndex-1:imagesBanner.length-1;
        setSelectedImage(imagesBanner[nextIndex]);
        setselectedIndex(nextIndex);
    }

    const previous=()=>{
       selectNewImage(selectedIndex,imagesBanner,false);
    }
    const next =()=>{
        selectNewImage(selectedIndex,imagesBanner,true);
    }
    return(
        <div className='Carrousel'>
            <img src={selectedImage} alt="Banner images" />
            <button className='previous' onClick={()=>previous()}>{"<"}</button>
            <button className='next' onClick={()=>next()}>{">"}</button>
        </div>
    );
 }