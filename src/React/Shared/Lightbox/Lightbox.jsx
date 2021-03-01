import React from 'react';
import styled from 'styled-components';

import Light from './Light.jsx';
const Lightbox = ({ show, onHide, children }) => {

    if (!show) {return ''; }

    return (
        <LightboxStyled className='Lightbox' onClick={ onHide }>
        <Light> 
        { children }
        </Light>
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    background-color: rgba(15, 15, 15, 0.61);

    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;

    z-index: 1000;
    
`;