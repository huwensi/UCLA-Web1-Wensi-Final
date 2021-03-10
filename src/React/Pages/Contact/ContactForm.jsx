import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { contactFields } from '../../../common/formData.js';

/* Components ---------------------------*/
import UniversalForm from '../../Shared/UniversalForm/UniversalForm.jsx';


const ContactFrom = () => {



    return (
        <ContactFromStyled className='ContactFrom'>
            <UniversalForm fields={ contactFields } />
        </ContactFromStyled>
    );
}

export default ContactFrom;

const ContactFromStyled = styled.div`
    
`;