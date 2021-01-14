import React, { useState } from 'react';
const OpendoorClosedoor = () => {
    const [imageSrc, imageSrcUpdate] = useState('/assets/img/closedoor.png');
    const imageOver = () => {
        imageSrcUpdate('/assets/img/opendoor.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/closedoor.png');
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
