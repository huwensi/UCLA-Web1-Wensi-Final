import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Input from './Fields/Input.jsx';
import Textarea from './Fields/Textarea.jsx';

const Field = ({theField, handleFieldUpdate}) => {


    let FieldCompoent;

    switch (theField.type) {
        case 'textarea':
            FieldCompoent = Textarea;
            break;
        default:
            FieldCompoent = Input;
            break;
    }

    const handleOnChange = (event) => {
        theField.value = event.target.value;
        handleFieldUpdate(theField);
    }

    return (
        <FieldStyled className='Field'>
            <FieldCompoent theField={ theField } onChange={ handleOnChange } />
        </FieldStyled>
    );
}

export default Field;

const FieldStyled = styled.div`
    
`;