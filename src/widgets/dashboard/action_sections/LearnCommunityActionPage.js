import React from 'react';
import styled from 'styled-components';

const ActionPageContentWrapper = styled.div`

    .header {

    }

    .content {

    }

    .footer {

    }

`;

/*
    header and content are going to be associated but are going to (mostly) be together
    can have single page or a sequence of pages

    based on the above requirement, the footer can incorporate the sliding cursor thing or not
    we can also specify it to have one action, like only the submit button, or there can be 
    multiple things that the page can do

    all of these are going to be controlled by either a single react dom element in the 
    constructor props, or a list of a correlated sequence of elements... 

*/

function ActionPageContent(headerSequence, contentSequence, footerType) {

    return (
        <ActionPageContentWrapper>
            <div className='header'>

            </div>

            <div className='content'>

            </div>

            <div className='footer'>

            </div>
        </ActionPageContentWrapper>
    )
}