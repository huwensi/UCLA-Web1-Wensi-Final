import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Button from './Button.jsx';
import FieldGroup from './FieldGroup/FieldGroup.jsx';


const UniversalForm = ({fields}) => {
    
    const [theFields, theFieldsUpdate] = useState(fields);

    console.log('theFields', theFields);

    const handleFieldUpdate = (theUpdatedField) => {
        console.log('Handle Field Updates', theUpdatedField.value);

        const newFields = theFields.map((field) => {
            return (field.id === theUpdatedField.id) ? theUpdatedField : field;
        });

        theFieldsUpdate(newFields);
    }

    return (
        <UniversalFormStyled className='UniversalForm'>
            <FieldGroup id='email'       theFields={ theFields }       handleFieldUpdate={ handleFieldUpdate } />
            <FieldGroup id='message'     theFields={ theFields }      handleFieldUpdate={ handleFieldUpdate } />
            <Button>Send mail</Button>

        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    
`;