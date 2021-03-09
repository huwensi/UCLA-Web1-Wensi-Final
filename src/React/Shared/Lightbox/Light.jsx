import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';


const Light = ({onHide, width, children}) => {

    const handleStopProp = (event) => {
        event.stopPropagation();
    }

    return (
        <LightStyled 
            className='Light'
            onClick={ handleStopProp }
            width={ width }
            >
            <button 
            className='close'
            onClick={ onHide }>
                <FontAwesomeIcon icon={ faTimes } />
            </button>
            { children }
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
    background-color: #fff;

    padding: 20px;

    position: absolute;
    width: 200px;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    

    width: ${({width}) => width};

    button.close{
        background-color:#fff;
        border-radius: 50%;
        width: 30px;
        height: 30px;

        margin: 0px;
        padding: 0px;
        border: none;

        box-shadow: 3px 0px 10px rgba(24, 24, 24, 0.452);

        cursor: pointer;


        position: absolute;
        right: -10px;
        top: -10px;


    }

    
`;