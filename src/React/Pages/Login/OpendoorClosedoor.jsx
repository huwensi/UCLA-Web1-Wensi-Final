import React, { useState } from 'react';
import styled from 'styled-components';

const OpendoorClosedoor = () => {
    
    const [imageSrc, imageSrcUpdate] = useState('/assets/img/closedoor.png');
   
    const imageOver = () => {
        imageSrcUpdate('/assets/img/opendoor.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/closedoor.png');
    }
    

    return (
        <OpendoorClosedoorStyled className='OpendoorClosedoor'>
           <h2>OpendoorClosedoor</h2>
            <img 
                src={ imageSrc }
                alt='OpendoorClosedoor'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut } 
            />
        </OpendoorClosedoorStyled>
    );
}

export default OpendoorClosedoor;

const OpendoorClosedoorStyled = styled.div`
    
`;