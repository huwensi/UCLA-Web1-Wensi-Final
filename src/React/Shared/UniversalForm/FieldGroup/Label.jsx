import React from 'react';
import styled from 'styled-components';

const label = ({theField}) => {

    return (
        <labelStyled className='label'>
            { theField.label }
        </labelStyled>
    );
}

export default label;

const labelStyled = styled.div`
    
`;