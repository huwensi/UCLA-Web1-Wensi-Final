import React, { useState } from 'react';
const OpendoorClosedoor = () => {
    const [imageSrc, imageSrcUpdate] = useState('/assets/img/moon.png');
    const imageOver = () => {
        imageSrcUpdate('/assets/img/sun.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/moon.png');
    }
    return (
        <div>
            OpendoorClosedoor
            <img 
                src={ imageSrc }
                onMouseOver={ imageOver }
                onMouseOut={ imageOut } 
            />
        </div>
    )
}
export default OpendoorClosedoor;
