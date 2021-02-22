import React from 'react';
import styled from 'styled-components';


/* Scripts ---------------------------*/
import { mq } from '../../../../common/media_queries.js';

/* Components ---------------------------*/
import LightBox from '../../../Shared/Lightbox/Lightbox.jsx'

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
        <img src={ member.image } alt={ member.name } />
        <h3>{ member.name }</h3>

        <LightBox />

        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    margin: 10px; width: 100px;
   /*  flex: 1; */

    @media ${mq.desktop} {
        width: 150px; margin: 15px;
    }


    @media ${mq.tablet} {
        width: 200px; margin: 20px;
    }




    img {
        max-width: 100%;
        display: block;
    }

    h3 {
        margin: 0px;
        color: white;
        background-color: maroon;
        font-size: 16px;
        padding: 5px;

        

    }
    
`;