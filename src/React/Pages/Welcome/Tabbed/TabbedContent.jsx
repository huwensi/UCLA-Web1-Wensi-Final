import React from 'react';
import styled from 'styled-components';

const TabbedContent = ({chosenTab}) => {


    console.log('Tabbedcontent chosenTab', chosenTab);

    return (
        <TabbedContentStyled className='TabbedContent'>
            <img src={ chosenTab.image } alt='Tab Image' />
            <h3>{ chosenTab.titile }</h3>
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
    
`;