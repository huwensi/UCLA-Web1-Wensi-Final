import React, { useState } from 'react';
import styled from 'styled-components';


/* Components ---------------------------*/
import Lightbox from '../../../Shared/Lightbox/Lightbox.jsx';


const GalleryItem = ({ item }) => {

    const [showLightbox, showLightboxUpdate] =useState(false)

    const handleonHide = () => {
        console.log('Closing Lightbox');
        showLightboxUpdate(false);
    }

    const handleonShow =() => {
        showLightboxUpdate(true);
    }
    

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div onClick={ handleonShow }>
                <img src={ item.image } alt={ item.title } />
                {/* <h2>{ item.title }</h2> */}
                <h3>{ item.category }</h3>
            </div>
           

            <Lightbox 
                show={ showLightbox }
                onHide={ handleonHide }
            >
                { item.title }
            </Lightbox>


        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`

position: relative;
margin: 10px;

h2 {
    position:absolute;
    bottom: 0px; left: 0px; right: 0px;
    background-color: rgba(168, 164, 164, 0.329);
    margin: 0px;
    padding: 5px;
}

h3 {
    position:absolute;
    top: 0px; left: 0px; right: 0px;
    background-color: rgba(128, 124, 124, 0.404);
    margin: 0px;
    padding: 5px;
    text-align: right;
}
    
`;