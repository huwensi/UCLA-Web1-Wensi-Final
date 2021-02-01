import React, { useState } from 'react';

const Login = () => {
    
    const [imageSrc, imageSrcUpdate] = useState('/assets/img/closedoor.png');
   
    const imageOver = () => {
        imageSrcUpdate('/assets/img/opendoor.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/closedoor.png');
    }
    
    return (
        <div>
            <h1>OpendoorClosedoor</h1>
            <img 
                src={ imageSrc }
                alt='OpendoorClosedoor'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut } 
            />
        </div>
    )
}

export default Login;
